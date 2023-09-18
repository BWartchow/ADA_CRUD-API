"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.professionalsListByStatus = exports.professionalsList = exports.professionalsRoot = void 0;
const dbConfig_1 = require("../db/dbConfig");
const logger_1 = __importDefault(require("../services/logger"));
let db = (0, dbConfig_1.createDbConnection)();
const professionalsRoot = (req, res) => {
    logger_1.default.info(req);
    res.send("Professionals' Home Page");
};
exports.professionalsRoot = professionalsRoot;
const professionalsList = (req, res) => {
    let professionalsList = [];
    let sql1 = `SELECT * FROM professors`;
    let sql2 = `SELECT * FROM coordinators`;
    db.all(sql1, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        rows.forEach((row) => { professionalsList.push(row); });
    });
    db.all(sql2, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        rows.forEach((row) => { professionalsList.push(row); });
    });
    logger_1.default.info(req);
    res.send(professionalsList);
};
exports.professionalsList = professionalsList;
const professionalsListByStatus = (req, res) => {
    let professionalsList = [];
    let status = req.query.status;
    let sql1 = `SELECT * FROM professors WHERE status="${status}"`;
    let sql2 = `SELECT * FROM coordinators WHERE status="${status}"`;
    db.all(sql1, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        rows.forEach((row) => { professionalsList.push(row); });
    });
    db.all(sql2, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        rows.forEach((row) => { professionalsList.push(row); });
    });
    logger_1.default.info(req);
    res.send(professionalsList);
};
exports.professionalsListByStatus = professionalsListByStatus;
