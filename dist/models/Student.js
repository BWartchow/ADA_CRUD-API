"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    constructor(id, name, birthdate, cpf, gender, nationality, address, phoneNumber, shift, year, room, gp1, gp2, gp3, status) {
        super(id, name, birthdate, cpf, gender, nationality, address, phoneNumber);
        this.shift = shift;
        this.year = year;
        this.room = room;
        this.gradePoint1 = gp1;
        this.gradePoint2 = gp2;
        this.gradePoint3 = gp3;
        this.gradePointAverage = (this.gradePoint1 + this.gradePoint2 + this.gradePoint3) / 3;
        this.status = status;
    }
}
exports.default = Student;
