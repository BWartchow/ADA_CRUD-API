"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Professional_1 = __importDefault(require("./Professional"));
class Coordinator extends Professional_1.default {
    constructor(id, name, birthdate, cpf, gender, nationality, address, phoneNumber, degree, role, shift, sector, weekHours, salary, hiringDate, status, directs, projects, mainProject) {
        super(id, name, birthdate, cpf, gender, nationality, address, phoneNumber, degree, role, shift, sector, weekHours, salary, hiringDate, status);
        this.directs = directs;
        this.projects = projects;
        this.mainProject = mainProject;
    }
}
exports.default = Coordinator;
