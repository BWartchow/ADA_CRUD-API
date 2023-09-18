import { Response, Request, NextFunction } from "express";
import { createDbConnection } from "../db/dbConfig";
import { Database } from "sqlite3";
import logger from "../services/logger";
import Student from "../models/Student";

let db: Database = createDbConnection();

const studentsRoot = (req: Request, res: Response) => {
    logger.info(req);
    res.send("Students' Home Page");
}

const studentsList = (req: Request, res: Response) => {

    let studentsList: Student[] = [];

    let sql = `SELECT * FROM students`;

    db.all(sql, [], (error: Error, rows: Student[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        rows.forEach((row: Student) => { studentsList.push(row) });
        logger.info(req);
        res.send(studentsList);
    }
    );
}

const studentsListByStatus = (req: Request, res: Response) => {
    
    let studentsList: Student[] = [];
    let status = req.query.status;

    let sql = `SELECT * FROM students WHERE status="${status}"`;

    db.all(sql, [], (error: Error, rows: Student[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row: Student) => { studentsList.push(row) });
            logger.info(req);
            res.send(studentsList);
        } else {
            res.send("No results for this status");
        }
    })
}

const studentsListByAverage = (req: Request, res: Response) => {
    
    let studentsList: Student[] = [];
    let average = req.query.gradePointAverage;

    let sql = `SELECT * FROM students WHERE gradePointAverage>="${average}"`;

    db.all(sql, [], (error: Error, rows: Student[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row: Student) => { studentsList.push(row) });
            logger.info(req);
            res.send(studentsList);
        } else {
            res.send("No results for this status");
        }
    })
}

const studentsListByYearAndRoom = (req: Request, res: Response) => {
    
    let studentsList: Student[] = [];
    let year = req.query.year;
    let room = req.query.room?.toString().toUpperCase();

    let sql = `SELECT * FROM students WHERE year="${year}" AND room="${room}"`;

    db.all(sql, [], (error: Error, rows: Student[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row: Student) => { studentsList.push(row) });
            logger.info(req);
            res.send(studentsList);
        } else {
            res.send("No results found");
        }
    })
}

const studentDetails = (req: Request, res: Response) => {
    
    let id = req.query.id;
    let sql = `SELECT * FROM students WHERE id="${id}"`;

    db.all(sql, [], (error: Error, rows: Student[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            logger.info(req);
            res.send(rows[0]);
        } else {
            res.send("Student not found");
        }
    }
    );
}

const addStudent = (req: Request, res: Response) => {

    let student: Student = req.body;
    let roomToUppercase: string = student.room.toUpperCase();
    let gpAverage = (Number(student.gradePoint1) + Number(student.gradePoint2) + Number(student.gradePoint3))/3;

    let sql = `INSERT INTO students(name,
                                    birthdate,
                                    cpf,
                                    gender,
                                    nationality,
                                    address,
                                    phoneNumber,
                                    shift,
                                    year,
                                    room,
                                    gradePoint1,
                                    gradePoint2,
                                    gradePoint3,
                                    gradePointAverage,
                                    status)
                                    VALUES ("${student.name}",
                                    "${student.birthdate}",
                                    "${student.cpf}",
                                    "${student.gender}",
                                    "${student.nationality}",
                                    "${student.address}",
                                    "${student.phoneNumber}",
                                    "${student.shift}",
                                    "${student.year}",
                                    "${roomToUppercase}",
                                    "${student.gradePoint1}",
                                    "${student.gradePoint2}",
                                    "${student.gradePoint3}",
                                    "${gpAverage}",
                                    "${student.status}")`;

    db.run(sql, (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.end(error.message);
        }
        logger.info(req);
        res.send(`Student ${student.name} Added`);
    })
}

const updateStudent = (req: Request, res: Response) => {

    let student: Student = req.body;
    let roomToUppercase: string = student.room.toUpperCase();
    let gpAverage = (Number(student.gradePoint1) + Number(student.gradePoint2) + Number(student.gradePoint3))/3;
    
    let sql = `UPDATE students SET name="${student.name}",
                                   birthdate="${student.birthdate}",
                                   cpf="${student.cpf}",
                                   gender="${student.gender}",
                                   nationality="${student.nationality}",
                                   address="${student.address}",
                                   phoneNumber="${student.phoneNumber}",
                                   shift="${student.shift}", 
                                   year="${student.year}",
                                   room="${roomToUppercase}",
                                   gradePoint1="${student.gradePoint1}",
                                   gradePoint2="${student.gradePoint2}",
                                   gradePoint3="${student.gradePoint3}",
                                   gradePointAverage="${gpAverage}",
                                   status="${student.status}"
                                   WHERE id="${student.id}" `;

    db.all(sql, [], (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        logger.info(req);
        res.send(`Student ${student.id} Updated`);
    });
}

const updateStudentsGrades = (req: Request, res: Response) => {

    let student: Student = req.body;
    let gpAverage = (Number(student.gradePoint1) + Number(student.gradePoint2) + Number(student.gradePoint3))/3;
    let sql = `UPDATE students SET gradePoint1="${student.gradePoint1}",
                                   gradePoint2="${student.gradePoint2}",
                                   gradePoint3="${student.gradePoint3}",
                                   gradePointAverage="${gpAverage}"
                                   WHERE id="${student.id}" `;

    db.all(sql, [], (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        logger.info(req);
        res.send(`Grades of Student ${student.id} Updated`);
    });
}

const updateStudentsStatus = (req: Request, res: Response) => {

    let student: Student = req.body;
    let sql = `UPDATE students SET status="${student.status}" WHERE id="${student.id}" `;

    db.all(sql, [], (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        logger.info(req);
        res.send(`Status of Student ${student.id} Updated`);
    });
}

const deleteStudent = (req: Request, res: Response) => {

    let id = req.query.id;
    let sql = `DELETE from students WHERE id="${id}"`;

    db.all(sql, [], (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        logger.info(req)
        res.send(`Student ${id} Deleted`);
    })
}

export {
    studentsRoot,
    studentsList,
    studentsListByStatus,
    studentsListByAverage,
    studentsListByYearAndRoom,
    studentDetails,
    addStudent,
    updateStudent,
    updateStudentsGrades,
    updateStudentsStatus,
    deleteStudent
}