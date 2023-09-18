"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coordinatorsControllers_1 = require("../controllers/coordinatorsControllers");
const coordinatorsRouter = (0, express_1.Router)();
coordinatorsRouter.get("/", coordinatorsControllers_1.coordinatorsRoot);
coordinatorsRouter.get("/coordinatorsList", coordinatorsControllers_1.coordinatorsList);
coordinatorsRouter.get("/coordinatorsListByStatus", coordinatorsControllers_1.coordinatorsListByStatus);
coordinatorsRouter.get("/coordinatorsListByMainProject", coordinatorsControllers_1.coordinatorsListByMainProject);
coordinatorsRouter.get("/coordinatorDetails", coordinatorsControllers_1.coordinatorDetails);
coordinatorsRouter.post("/addCoordinator", coordinatorsControllers_1.addCoordinator);
coordinatorsRouter.put("/updateCoordinator", coordinatorsControllers_1.updateCoordinator);
coordinatorsRouter.patch("/updateCoordinatorsPayroll", coordinatorsControllers_1.updateCoordinatorsPayroll);
coordinatorsRouter.patch("/updateCoordinatorsStatus", coordinatorsControllers_1.updateCoordinatorsStatus);
coordinatorsRouter.delete("/deleteCoordinator", coordinatorsControllers_1.deleteCoordinator);
exports.default = coordinatorsRouter;
