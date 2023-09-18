"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfessor = exports.updateProfessorsStatus = exports.updateProfessorsPayroll = exports.updateProfessor = exports.addProfessor = exports.professorDetails = exports.professorsListBySubject = exports.professorsListByYearAndRoom = exports.professorsListByStatus = exports.professorsList = exports.professorsRoot = void 0;
const dbConfig_1 = require("../db/dbConfig");
const logger_1 = __importDefault(require("../services/logger"));
let db = (0, dbConfig_1.createDbConnection)();
const professorsRoot = (req, res) => {
    logger_1.default.info(req);
    res.send("Professors' Home Page");
};
exports.professorsRoot = professorsRoot;
const professorsList = (req, res) => {
    let professorsList = [];
    let sql = `SELECT * FROM professors`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        rows.forEach((row) => { professorsList.push(row); });
        logger_1.default.info(req);
        res.send(professorsList);
    });
};
exports.professorsList = professorsList;
const professorsListByStatus = (req, res) => {
    let professorsList = [];
    let status = req.query.status;
    let sql = `SELECT * FROM professors WHERE status="${status}"`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row) => { professorsList.push(row); });
            logger_1.default.info(req);
            res.send(professorsList);
        }
        else {
            res.send("No results for this status");
        }
    });
};
exports.professorsListByStatus = professorsListByStatus;
const professorsListByYearAndRoom = (req, res) => {
    var _a;
    let professorsList = [];
    let year = req.query.year;
    let room = (_a = req.query.room) === null || _a === void 0 ? void 0 : _a.toString().toUpperCase();
    let sql = `SELECT * FROM professors WHERE year="${year}" AND room="${room}"`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row) => { professorsList.push(row); });
            logger_1.default.info(req);
            res.send(professorsList);
        }
        else {
            res.send("No results found");
        }
    });
};
exports.professorsListByYearAndRoom = professorsListByYearAndRoom;
const professorsListBySubject = (req, res) => {
    let professorsList = [];
    let subject = req.query.subject;
    let sql = `SELECT * FROM professors WHERE subject="${subject}"`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row) => { professorsList.push(row); });
            logger_1.default.info(req);
            res.send(professorsList);
        }
        else {
            res.send("No results found");
        }
    });
};
exports.professorsListBySubject = professorsListBySubject;
const professorDetails = (req, res) => {
    let id = req.query.id;
    let sql = `SELECT * FROM professors WHERE id="${id}"`;
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
            res.send("Professor not found");
        }
    });
};
exports.professorDetails = professorDetails;
const addProfessor = (req, res) => {
    let professor = req.body;
    let roomToUppercase = professor.room.toUpperCase();
    let sql = `INSERT INTO professors(name,
                                      birthdate,
                                      cpf,
                                      gender,
                                      nationality,
                                      address,
                                      phoneNumber,
                                      degree,
                                      role,
                                      shift,
                                      sector,
                                      weekHours,
                                      salary,
                                      hiringDate,
                                      status,
                                      subject,
                                      year,
                                      room)
                                      VALUES ("${professor.name}",
                                      "${professor.birthdate}",
                                      "${professor.cpf}",
                                      "${professor.gender}",
                                      "${professor.nationality}",
                                      "${professor.address}",
                                      "${professor.phoneNumber}",
                                      "${professor.degree}",
                                      "${professor.role}",
                                      "${professor.shift}",
                                      "${professor.sector}",
                                      "${professor.weekHours}",
                                      "${professor.salary}",
                                      "${professor.hiringDate}",
                                      "${professor.status}",
                                      "${professor.subject}",
                                      "${professor.year}",
                                      "${roomToUppercase}")`;
    db.run(sql, (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.end(error.message);
        }
        logger_1.default.info(req);
        res.send(`Professor ${professor.name} Added`);
    });
};
exports.addProfessor = addProfessor;
const updateProfessor = (req, res) => {
    let professor = req.body;
    let roomToUppercase = professor.room.toUpperCase();
    let sql = `UPDATE professors SET name="${professor.name}",
                                   birthdate="${professor.birthdate}",
                                   cpf="${professor.cpf}",
                                   gender="${professor.gender}",
                                   nationality="${professor.nationality}",
                                   address="${professor.address}",
                                   phoneNumber="${professor.phoneNumber}",
                                   degree="${professor.degree}",
                                   role="${professor.role}",
                                   shift="${professor.shift}",
                                   sector="${professor.sector}",
                                   weekHours="${professor.weekHours}",
                                   salary="${professor.salary}",
                                   hiringDate="${professor.hiringDate}",
                                   status="${professor.status}",
                                   subject="${professor.subject}", 
                                   year="${professor.year}",
                                   room="${roomToUppercase}"
                                   WHERE id="${professor.id}" `;
    db.all(sql, [], (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        logger_1.default.info(req);
        res.send(`Professor ${professor.id} Updated`);
    });
};
exports.updateProfessor = updateProfessor;
const updateProfessorsPayroll = (req, res) => {
    let professor = req.body;
    let sql = `UPDATE professors SET weekHours="${professor.weekHours}",
                                   salary="${professor.salary}"
                                   WHERE id="${professor.id}" `;
    db.all(sql, [], (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        logger_1.default.info(req);
        res.send(`Payroll of Professor ${professor.id} Updated`);
    });
};
exports.updateProfessorsPayroll = updateProfessorsPayroll;
const updateProfessorsStatus = (req, res) => {
    let professor = req.body;
    let sql = `UPDATE professors SET status="${professor.status}" WHERE id="${professor.id}" `;
    db.all(sql, [], (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        logger_1.default.info(req);
        res.send(`Status of Professor ${professor.id} Updated`);
    });
};
exports.updateProfessorsStatus = updateProfessorsStatus;
const deleteProfessor = (req, res) => {
    let id = req.query.id;
    let sql = `DELETE from professors WHERE id="${id}"`;
    db.all(sql, [], (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        logger_1.default.info(req);
        res.send(`Professor ${id} Deleted`);
    });
};
exports.deleteProfessor = deleteProfessor;
