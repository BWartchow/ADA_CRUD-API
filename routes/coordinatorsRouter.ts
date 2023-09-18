import { Router } from "express";
import {
    coordinatorsRoot,
    coordinatorsList,
    coordinatorsListByStatus,
    coordinatorsListByMainProject,
    coordinatorDetails,
    addCoordinator,
    updateCoordinator,
    updateCoordinatorsPayroll,
    updateCoordinatorsStatus,
    deleteCoordinator
} from "../controllers/coordinatorsControllers"

const coordinatorsRouter = Router();

coordinatorsRouter.get("/", coordinatorsRoot);

coordinatorsRouter.get("/coordinatorsList", coordinatorsList);

coordinatorsRouter.get("/coordinatorsListByStatus", coordinatorsListByStatus);

coordinatorsRouter.get("/coordinatorsListByMainProject", coordinatorsListByMainProject);

coordinatorsRouter.get("/coordinatorDetails", coordinatorDetails);

coordinatorsRouter.post("/addCoordinator", addCoordinator);

coordinatorsRouter.put("/updateCoordinator", updateCoordinator);

coordinatorsRouter.patch("/updateCoordinatorsPayroll", updateCoordinatorsPayroll);

coordinatorsRouter.patch("/updateCoordinatorsStatus", updateCoordinatorsStatus);

coordinatorsRouter.delete("/deleteCoordinator", deleteCoordinator);

export default coordinatorsRouter;