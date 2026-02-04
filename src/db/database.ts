

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
        CREATE TABLE IF NOT EXISTS users(
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
    db.run(
        `
        CREATE TABLE IF NOT EXISTS courses(
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             title TEXT NOT NULL,
             description TEXT,
             isDeleted INTEGER DEFAULT 0,
             createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        `
        ,
        (err:Error|null)=>{
            if(err){
                console.error("Error creating course tables",err.message);
            }else{
                console.log("course table created");
            }
        }
    );
    db.run(
        `
        CREATE TABLE IF NOT EXISTS modules(
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             courseId INTEGER NOT NULL,
             title TEXT NOT NULL,
             isDeleted INTEGER DEFAULT 0,
             createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        `
        ,
        (err:Error|null)=>{
            if(err){
                console.error("Error creating modules tables",err.message);
            }else{
                console.log("modules table created");
            }
        }
    );
    db.run(
        `
        CREATE TABLE IF NOT EXISTS lessons(
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             moduleId INTEGER NOT NULL,
             title TEXT NOT NULL,
             content TEXT,
             isDeleted INTEGER DEFAULT 0,
             createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        `
        ,
        (err:Error|null)=>{
            if(err){
                console.error("Error creating lessons tables",err.message);
            }else{
                console.log("lessons table created");
            }
        }
    );
    db.run(
        `
        CREATE TABLE IF NOT EXISTS enrollments(
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             userId INTEGER NOT NULL,
             courseId INTEGER NOT NULL,
             enrollmentDate TEXT NOT NULL,
             isDeleted INTEGER DEFAULT 0,
             createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        `
        ,
        (err:Error|null)=>{
            if(err){
                console.error("Error creating enrollments tables",err.message);
            }else{
                console.log("enrollments table created");
            }
        }
    );


});