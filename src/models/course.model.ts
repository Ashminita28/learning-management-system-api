import { db } from "../db/database";
 

export const createCourse = (
  title: string,
  description: string,
): Promise<number> => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO courses (title,description)
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
 

export const getAllCourses = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT id, title, description, createdAt
      FROM courses
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
 

export const getCourseById = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT id, title, description, createdAt
      FROM courses
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
 

export const updateCourse = (
  id: number,
  title: string,
  description: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE courses
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
 

export const deleteCourse = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE courses
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