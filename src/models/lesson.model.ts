import { db } from "../db/database";
 

export const createLesson = (
  title: string,
  description: string,
): Promise<number> => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO lessons (title,description)
      VALUES (?, ?)
    `;
 
    db.run(query, [title,description], function (err: Error | null) {
      if (err) {
        reject(err);
      } else {
        resolve(this.lastID);
      }
    });
  });
};
 

export const getAllLessons = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT id, title, description, createdAt
      FROM lessons
      WHERE isDeleted = 0
    `;
 
    db.all(query, [], (err: Error | null, rows: any[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
 

export const getLessonById = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT id, title, description, createdAt
      FROM lessons
      WHERE id = ? AND isDeleted = 0
    `;
 
    db.get(query, [id], (err: Error | null, row: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};
 

export const updateLesson = (
  id: number,
  title: string,
  description: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE lessons
      SET title = ?, description = ?
      WHERE id = ? AND isDeleted = 0
    `;
 
    db.run(query, [title, description, id], (err: Error | null) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
 

export const deleteLesson = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE lessons
      SET isDeleted = 1
      WHERE id = ?
    `;
 
    db.run(query, [id], (err: Error | null) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};