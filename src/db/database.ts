

import sqlite3 from "sqlite3";


export const db=new sqlite3.Database(":memory:",(err:Error|null)=>{
    if(err){
        console.error("failed to connect to database",err.message)
    } else{
        console.log("Sqlite connected");
    }
});

db.serialize(()=>{
    db.run(
        `
        CREATE TABLE users(
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             name TEXT NOT NULL,
             email TEXT UNIQUE NOT NULL,
             password TEXT NOT NULL,
             isDeleted INTEGER DEFAULT 0,
             createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        `
        ,
        (err:Error|null)=>{
            if(err){
                console.error("Error creating user tabls",err.message);
            }else{
                console.log("User table created");
            }
        }
    );
});