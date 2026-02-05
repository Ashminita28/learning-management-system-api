import { db } from "../db/database";
 

export const createUser = (
  name: string,
  email: string,
  password: string,
  role:string
): Promise<number> => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO users (name, email, password,role)
      VALUES (?, ?, ?, ?)
    `;
 
    db.run(query, [name, email, password,role], function (err: Error | null) {
      if (err) {
        reject(err);
      } else {
        resolve(this.lastID);
      }
    });
  });
};
 

export const getAllUsers = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT id, name, email, createdAt
      FROM users
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
 

export const getUserById = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT id, name, email, role, createdAt
      FROM users
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
 

export const updateUser = (
  id: number,
  name: string,
  email: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE users
      SET name = ?, email = ?
      WHERE id = ? AND isDeleted = 0
    `;
 
    db.run(query, [name, email, id], (err: Error | null) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
 

export const deleteUser = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE users
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

export const getUserByEmail=(email:string):Promise<any> =>{
  return new Promise((resolve,reject)=>{
    db.get(
      `SELECT * FROM users WHERE email=? AND isDeleted=0`,
      [email],
      (err:Error|null,row:any)=>{
        if(err) reject(err);
        else resolve(row);
      }
    );
  });
};