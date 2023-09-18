"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const professorsController_1 = require("../controllers/professorsController");
const professorsRouter = (0, express_1.Router)();
professorsRouter.get("/", professorsController_1.professorsRoot);
professorsRouter.get("/professorsList", professorsController_1.professorsList);
professorsRouter.get("/professorsListByStatus", professorsController_1.professorsListByStatus);
professorsRouter.get("/professorsListByYearAndRoom", professorsController_1.professorsListByYearAndRoom);
professorsRouter.get("/professorsListBySubject", professorsController_1.professorsListBySubject);
professorsRouter.get("/professorDetails", professorsController_1.professorDetails);
professorsRouter.post("/addProfessor", professorsController_1.addProfessor);
professorsRouter.put("/updateProfessor", professorsController_1.updateProfessor);
professorsRouter.patch("/updateProfessorsPayroll", professorsController_1.updateProfessorsPayroll);
professorsRouter.patch("/updateProfessorsStatus", professorsController_1.updateProfessorsStatus);
professorsRouter.delete("/deleteProfessor", professorsController_1.deleteProfessor);
exports.default = professorsRouter;
