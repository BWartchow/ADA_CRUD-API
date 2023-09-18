import { Database, sqlite3 } from "sqlite3";

const sqlite3 = require("sqlite3").verbose();
const filePath: string = "./db/school.db";

const createDbConnection = () => {
    let db: Database = new sqlite3.Database(filePath, (error: Error) => {
        if (error) {
            return console.error(error.message);
        }
    });
    console.log("Connection with SQLite has been estabilished");

    db.exec(`CREATE TABLE IF NOT EXISTS professors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        birthdate VARCHAR(50),
        cpf VARCHAR(50),
        gender VARCHAR(50),
        nationality VARCHAR(50),
        address VARCHAR(50),
        phoneNumber VARCHAR(50),
        degree VARCHAR(50),
        role VARCHAR(50),
        shift VARCHAR(50),
        sector VARCHAR(50),
        weekHours VARCHAR(50),
        salary VARCHAR(50),
        hiringDate VARCHAR(50),
        status VARCHAR(50),
        subject VARCHAR(50),
        year VARCHAR(50),
        room VARCHAR(50)
        );
    `);

    db.exec(`CREATE TABLE IF NOT EXISTS coordinators (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        birthdate VARCHAR(50),
        cpf VARCHAR(50),
        gender VARCHAR(50),
        nationality VARCHAR(50),
        address VARCHAR(50),
        phoneNumber VARCHAR(50),
        degree VARCHAR(50),
        role VARCHAR(50),
        shift VARCHAR(50),
        sector VARCHAR(50),
        weekHours VARCHAR(50),
        salary VARCHAR(50),
        hiringDate VARCHAR(50),
        status VARCHAR(50),
        directs VARCHAR(50),
        projects VARCHAR(50),
        mainProject VARCHAR(50)
        );
    `);

    db.exec(`CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        birthdate VARCHAR(50),
        cpf VARCHAR(50),
        gender VARCHAR(50),
        nationality VARCHAR(50),
        address VARCHAR(50),
        phoneNumber VARCHAR(50),
        shift VARCHAR(50),
        year VARCHAR(50),
        room VARCHAR(50),
        gradePoint1 VARCHAR(50),
        gradePoint2 VARCHAR(50),
        gradePoint3 VARCHAR(50),
        gradePointAverage VARCHAR(50),
        status VARCHAR(50)
        );
    `);
    
    return db;
}


export { createDbConnection }