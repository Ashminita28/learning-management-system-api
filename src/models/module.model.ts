import { db } from "../db/database";
 

export const createModule = (
  courseId:number,
  title: string,
): Promise<number> => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO modules (courseId,title)
      VALUES (?, ?)
    `;
 
    db.run(query, [courseId,title], function (err: Error | null) {
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
      SELECT *
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
      SELECT *
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
  courseId:number,
  title: string,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE modules
      SET title = ?, 
      WHERE id = ? AND isDeleted = 0
    `;
 
    db.run(query, [courseId,title, id], (err: Error | null) => {
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