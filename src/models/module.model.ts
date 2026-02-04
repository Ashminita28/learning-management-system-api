import { db } from "../db/database";
 

export const createModule = (
  title: string,
  description: string,
): Promise<number> => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO modules (courseId,title)
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
 

export const getAllModules = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT id, courseId, title, createdAt
      FROM modules
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
 

export const getModuleById = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT id, courseId, title, createdAt
      FROM modules
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
 

export const updateModule = (
  id: number,
  title: string,
  description: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE modules
      SET title = ?, 
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
 

export const deleteModule = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE modules
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