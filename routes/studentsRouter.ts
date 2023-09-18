import { Router } from "express";
import {
    studentsRoot,
    studentsList,
    studentsListByStatus,
    studentsListByAverage,
    studentsListByYearAndRoom,
    studentDetails,
    addStudent,
    updateStudent,
    updateStudentsGrades,
    updateStudentsStatus,
    deleteStudent
} from "../controllers/studentsControllers"

const studentsRouter = Router();

studentsRouter.get("/", studentsRoot);

studentsRouter.get("/studentsList", studentsList);

studentsRouter.get("/studentsListByStatus", studentsListByStatus);

studentsRouter.get("/studentsListByAverage", studentsListByAverage);

studentsRouter.get("/studentsListByYearAndRoom", studentsListByYearAndRoom);

studentsRouter.get("/studentDetails", studentDetails);

studentsRouter.post("/addStudent", addStudent);

studentsRouter.put("/updateStudent", updateStudent);

studentsRouter.patch("/updateStudentsGrades", updateStudentsGrades);

studentsRouter.patch("/updateStudentsStatus", updateStudentsStatus);

studentsRouter.delete("/deleteStudent", deleteStudent);

export default studentsRouter;