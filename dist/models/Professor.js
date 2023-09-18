"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Professional_1 = __importDefault(require("./Professional"));
class Professor extends Professional_1.default {
    constructor(id, name, birthdate, cpf, gender, nationality, address, phoneNumber, degree, role, shift, sector, weekHours, salary, hiringDate, status, subject, year, room) {
        super(id, name, birthdate, cpf, gender, nationality, address, phoneNumber, degree, role, shift, sector, weekHours, salary, hiringDate, status);
        this.subject = subject;
        this.year = year;
        this.room = room;
    }
}
exports.default = Professor;
