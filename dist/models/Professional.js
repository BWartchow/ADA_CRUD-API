"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Professional extends Person_1.default {
    constructor(id, name, birthdate, cpf, gender, nationality, address, phoneNumber, degree, shift, role, sector, weekHours, salary, hiringDate, status) {
        super(id, name, birthdate, cpf, gender, nationality, address, phoneNumber);
        this.degree = degree;
        this.role = role;
        this.shift = shift;
        this.sector = sector;
        this.weekHours = weekHours;
        this.salary = salary;
        this.hiringDate = hiringDate;
        this.status = status;
    }
}
exports.default = Professional;
