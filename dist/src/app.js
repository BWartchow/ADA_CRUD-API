"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const professorsRouter_1 = __importDefault(require("../routes/professorsRouter"));
const coordinatorsRouter_1 = __importDefault(require("../routes/coordinatorsRouter"));
const studentsRouter_1 = __importDefault(require("../routes/studentsRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("ADA Web Project - School API");
});
app.use("/professors", professorsRouter_1.default);
app.use("/coordinators", coordinatorsRouter_1.default);
app.use("/students", studentsRouter_1.default);
app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});
