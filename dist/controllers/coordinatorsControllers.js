"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCoordinator = exports.updateCoordinatorsStatus = exports.updateCoordinatorsPayroll = exports.updateCoordinator = exports.addCoordinator = exports.coordinatorDetails = exports.coordinatorsListByMainProject = exports.coordinatorsListByStatus = exports.coordinatorsList = exports.coordinatorsRoot = void 0;
const dbConfig_1 = require("../db/dbConfig");
const logger_1 = __importDefault(require("../services/logger"));
let db = (0, dbConfig_1.createDbConnection)();
const coordinatorsRoot = (req, res) => {
    logger_1.default.info(req);
    res.send("Coordinators' Home Page");
};
exports.coordinatorsRoot = coordinatorsRoot;
const coordinatorsList = (req, res) => {
    let coordinatorsList = [];
    let sql = `SELECT * FROM coordinators`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        rows.forEach((row) => { coordinatorsList.push(row); });
        logger_1.default.info(req);
        res.send(coordinatorsList);
    });
};
exports.coordinatorsList = coordinatorsList;
const coordinatorsListByStatus = (req, res) => {
    let coordinatorsList = [];
    let status = req.query.status;
    let sql = `SELECT * FROM coordinators WHERE status="${status}"`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row) => { coordinatorsList.push(row); });
            logger_1.default.info(req);
            res.send(coordinatorsList);
        }
        else {
            res.send("No results for this status");
        }
    });
};
exports.coordinatorsListByStatus = coordinatorsListByStatus;
const coordinatorsListByMainProject = (req, res) => {
    let coordinatorsList = [];
    let project = req.query.mainProject;
    let sql = `SELECT * FROM coordinators WHERE mainProject="${project}"`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row) => { coordinatorsList.push(row); });
            logger_1.default.info(req);
            res.send(coordinatorsList);
        }
        else {
            res.send("No results found");
        }
    });
};
exports.coordinatorsListByMainProject = coordinatorsListByMainProject;
const coordinatorDetails = (req, res) => {
    let id = req.query.id;
    let sql = `SELECT * FROM coordinators WHERE id="${id}"`;
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
            res.send("Coordinator not found");
        }
    });
};
exports.coordinatorDetails = coordinatorDetails;
const addCoordinator = (req, res) => {
    let coordinator = req.body;
    let sql = `INSERT INTO coordinators(name,
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
                                        directs,
                                        projects,
                                        mainProject)
                                        VALUES ("${coordinator.name}",
                                        "${coordinator.birthdate}",
                                        "${coordinator.cpf}",
                                        "${coordinator.gender}",
                                        "${coordinator.nationality}",
                                        "${coordinator.address}",
                                        "${coordinator.phoneNumber}",
                                        "${coordinator.degree}",
                                        "${coordinator.role}",
                                        "${coordinator.shift}",
                                        "${coordinator.sector}",
                                        "${coordinator.weekHours}",
                                        "${coordinator.salary}",
                                        "${coordinator.hiringDate}",
                                        "${coordinator.status}",
                                        "${coordinator.directs}",
                                        "${coordinator.projects}",
                                        "${coordinator.mainProject}")`;
    db.run(sql, (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.end(error.message);
        }
        logger_1.default.info(req);
        res.send(`Coordinator ${coordinator.name} Added`);
    });
};
exports.addCoordinator = addCoordinator;
const updateCoordinator = (req, res) => {
    let coordinator = req.body;
    let sql = `UPDATE coordinators SET name="${coordinator.name}",
                                   birthdate="${coordinator.birthdate}",
                                   cpf="${coordinator.cpf}",
                                   gender="${coordinator.gender}",
                                   nationality="${coordinator.nationality}",
                                   address="${coordinator.address}",
                                   phoneNumber="${coordinator.phoneNumber}",
                                   degree="${coordinator.degree}",
                                   role="${coordinator.role}",
                                   shift="${coordinator.shift}",
                                   sector="${coordinator.sector}",
                                   weekHours="${coordinator.weekHours}",
                                   salary="${coordinator.salary}",
                                   hiringDate="${coordinator.hiringDate}",
                                   status="${coordinator.status}",
                                   directs="${coordinator.directs}", 
                                   projects="${coordinator.projects}",
                                   mainProject="${coordinator.mainProject}"
                                   WHERE id="${coordinator.id}" `;
    db.all(sql, [], (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        logger_1.default.info(req);
        res.send(`Coordinator ${coordinator.id} Updated`);
    });
};
exports.updateCoordinator = updateCoordinator;
const updateCoordinatorsPayroll = (req, res) => {
    let coordinator = req.body;
    let sql = `UPDATE coordinators SET weekHours="${coordinator.weekHours}",
                                   salary="${coordinator.salary}"
                                   WHERE id="${coordinator.id}" `;
    db.all(sql, [], (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        logger_1.default.info(req);
        res.send(`Payroll of Coordinator ${coordinator.id} Updated`);
    });
};
exports.updateCoordinatorsPayroll = updateCoordinatorsPayroll;
const updateCoordinatorsStatus = (req, res) => {
    let coordinator = req.body;
    let sql = `UPDATE coordinators SET status="${coordinator.status}" WHERE id="${coordinator.id}" `;
    db.all(sql, [], (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        logger_1.default.info(req);
        res.send(`Status of Coordinator ${coordinator.id} Updated`);
    });
};
exports.updateCoordinatorsStatus = updateCoordinatorsStatus;
const deleteCoordinator = (req, res) => {
    let id = req.query.id;
    let sql = `DELETE from coordinators WHERE id="${id}"`;
    db.all(sql, [], (error) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        logger_1.default.info(req);
        res.send(`Coordinator ${id} Deleted`);
    });
};
exports.deleteCoordinator = deleteCoordinator;
