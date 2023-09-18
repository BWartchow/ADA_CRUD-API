"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudentsStatus = exports.updateStudentsGrades = exports.updateStudent = exports.addStudent = exports.studentDetails = exports.studentsListByYearAndRoom = exports.studentsListByAverage = exports.studentsListByStatus = exports.studentsList = exports.studentsRoot = void 0;
const dbConfig_1 = require("../db/dbConfig");
const logger_1 = __importDefault(require("../services/logger"));
let db = (0, dbConfig_1.createDbConnection)();
const studentsRoot = (req, res) => {
    logger_1.default.info(req);
    res.send("Students' Home Page");
};
exports.studentsRoot = studentsRoot;
const studentsList = (req, res) => {
    let studentsList = [];
    let sql = `SELECT * FROM students`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        rows.forEach((row) => { studentsList.push(row); });
        logger_1.default.info(req);
        res.send(studentsList);
    });
};
exports.studentsList = studentsList;
const studentsListByStatus = (req, res) => {
    let studentsList = [];
    let status = req.query.status;
    let sql = `SELECT * FROM students WHERE status="${status}"`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row) => { studentsList.push(row); });
            logger_1.default.info(req);
            res.send(studentsList);
        }
        else {
            res.send("No results for this status");
        }
    });
};
exports.studentsListByStatus = studentsListByStatus;
const studentsListByAverage = (req, res) => {
    let studentsList = [];
    let average = req.query.gradePointAverage;
    let sql = `SELECT * FROM students WHERE gradePointAverage>="${average}"`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row) => { studentsList.push(row); });
            logger_1.default.info(req);
            res.send(studentsList);
        }
        else {
            res.send("No results for this status");
        }
    });
};
exports.studentsListByAverage = studentsListByAverage;
const studentsListByYearAndRoom = (req, res) => {
    var _a;
    let studentsList = [];
    let year = req.query.year;
    let room = (_a = req.query.room) === null || _a === void 0 ? void 0 : _a.toString().toUpperCase();
    let sql = `SELECT * FROM students WHERE year="${year}" AND room="${room}"`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row) => { studentsList.push(row); });
            logger_1.default.info(req);
            res.send(studentsList);
        }
        else {
            res.send("No results found");
        }
    });
};
exports.studentsListByYearAndRoom = studentsListByYearAndRoom;
const studentDetails = (req, res) => {
    let id = req.query.id;
    let sql = `SELECT * FROM students WHERE id="${id}"`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            logger_1.default.info(req);
            res.send(rows[0]);
        }
        else {
            res.send("Student not found");
        }
    });
};
exports.studentDetails = studentDetails;
const addStudent = (req, res) => {
    let student = req.body;
    let roomToUppercase = student.room.toUpperCase();
    let gpAverage = (Number(student.gradePoint1) + Number(student.gradePoint2) + Number(student.gradePoint3)) / 3;
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
    db.run(sql, (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.end(error.message);
        }
        logger_1.default.info(req);
        res.send(`Student ${student.name} Added`);
    });
};
exports.addStudent = addStudent;
const updateStudent = (req, res) => {
    let student = req.body;
    let roomToUppercase = student.room.toUpperCase();
    let gpAverage = (Number(student.gradePoint1) + Number(student.gradePoint2) + Number(student.gradePoint3)) / 3;
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
    db.all(sql, [], (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        logger_1.default.info(req);
        res.send(`Student ${student.id} Updated`);
    });
};
exports.updateStudent = updateStudent;
const updateStudentsGrades = (req, res) => {
    let student = req.body;
    let gpAverage = (Number(student.gradePoint1) + Number(student.gradePoint2) + Number(student.gradePoint3)) / 3;
    let sql = `UPDATE students SET gradePoint1="${student.gradePoint1}",
                                   gradePoint2="${student.gradePoint2}",
                                   gradePoint3="${student.gradePoint3}",
                                   gradePointAverage="${gpAverage}"
                                   WHERE id="${student.id}" `;
    db.all(sql, [], (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        logger_1.default.info(req);
        res.send(`Grades of Student ${student.id} Updated`);
    });
};
exports.updateStudentsGrades = updateStudentsGrades;
const updateStudentsStatus = (req, res) => {
    let student = req.body;
    let sql = `UPDATE students SET status="${student.status}" WHERE id="${student.id}" `;
    db.all(sql, [], (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        logger_1.default.info(req);
        res.send(`Status of Student ${student.id} Updated`);
    });
};
exports.updateStudentsStatus = updateStudentsStatus;
const deleteStudent = (req, res) => {
    let id = req.query.id;
    let sql = `DELETE from students WHERE id="${id}"`;
    db.all(sql, [], (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        logger_1.default.info(req);
        res.send(`Student ${id} Deleted`);
    });
};
exports.deleteStudent = deleteStudent;
