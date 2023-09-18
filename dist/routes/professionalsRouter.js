"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const professionalsController_1 = require("../controllers/professionalsController");
const professionalsRouter = (0, express_1.Router)();
professionalsRouter.get("/", professionalsController_1.professionalsRoot);
professionalsRouter.get("/professionalsList", professionalsController_1.professionalsList);
professionalsRouter.get("/professionalsListByStatus", professionalsController_1.professionalsListByStatus);
exports.default = professionalsRouter;
