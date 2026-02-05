import { db } from "../db/database";
 

export const createEnrollment = (
  userId: number,
  courseId: number,
): Promise<number> => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO enrollments (userId ,courseId)
      VALUES (?, ?)
    `;
 
    db.run(query, [userId,courseId], function (err: Error | null) {
      if (err) {
        reject(err);
      } else {
        resolve(this.lastID);
      }
    });
  });
};
 

export const getAllEnrollments = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT *
      FROM enrollments
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
 

export const getEnrollmentById = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT *
      FROM enrollments
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
 

export const updateEnrollment = (
  id: number,
  userId: number,
  courseId: number
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE enrollments
      SET title = ?, description = ?
      WHERE id = ? AND isDeleted = 0
    `;
 
    db.run(query, [userId, courseId, id], (err: Error | null) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
 

export const deleteEnrollment = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE enrollments
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