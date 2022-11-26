import express from "express";
import cors from "cors";
import UsersController from "./users/users-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
UsersController(app);

app.listen(4000);
