import express from 'express';
import movieController from "./searchMovies/movie-controller.js";
const app = express()
movieController(app)
app.listen("4000");
