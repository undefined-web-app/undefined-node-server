import express from "express";
import cors from "cors";
import UsersController from "./users/users-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
const app = express();
app.use(cors());
app.use(express.json());
UsersController(app);
ReviewsController(app);

app.listen(process.env.PORT || 4000);
