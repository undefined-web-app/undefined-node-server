import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UsersController from "./users/users-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";

/*const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};*/

/*const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING ||
  "mongodb://localhost:27017/undefined-web-app";*/
mongoose.connect(
  "mongodb+srv://undefinedwep:undefinedwep@cluster0.hax0zbj.mongodb.net/?retryWrites=true&w=majority"
);

const app = express();
app.use(cors());
app.use(express.json());

UsersController(app);
ReviewsController(app);

app.listen(process.env.PORT || 4000);
