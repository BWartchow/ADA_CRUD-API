import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import professorsRouter from "../routes/professorsRouter";
import coordinatorsRouter from "../routes/coordinatorsRouter";
import studentsRouter from "../routes/studentsRouter";

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("ADA Web Project - School API");
});

app.use("/professors", professorsRouter);
app.use("/coordinators", coordinatorsRouter);
app.use("/students", studentsRouter);

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
})