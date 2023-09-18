import { Router } from "express";
import{
    professorsRoot,
    professorsList,
    professorsListByStatus,
    professorsListByYearAndRoom,
    professorsListBySubject,
    professorDetails,
    addProfessor,
    updateProfessor,
    updateProfessorsPayroll,
    updateProfessorsStatus,
    deleteProfessor
} from "../controllers/professorsController"

const professorsRouter = Router();

professorsRouter.get("/", professorsRoot);

professorsRouter.get("/professorsList", professorsList);

professorsRouter.get("/professorsListByStatus", professorsListByStatus);

professorsRouter.get("/professorsListByYearAndRoom", professorsListByYearAndRoom);

professorsRouter.get("/professorsListBySubject", professorsListBySubject);

professorsRouter.get("/professorDetails", professorDetails);

professorsRouter.post("/addProfessor", addProfessor);

professorsRouter.put("/updateProfessor", updateProfessor);

professorsRouter.patch("/updateProfessorsPayroll", updateProfessorsPayroll);

professorsRouter.patch("/updateProfessorsStatus", updateProfessorsStatus);

professorsRouter.delete("/deleteProfessor", deleteProfessor);

export default professorsRouter;