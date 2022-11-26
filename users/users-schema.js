import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstNmae: String,
    lastName: String,
    email: String,
    dob: Date,
  },
  { collection: "user" }
);

export default usersSchema;
