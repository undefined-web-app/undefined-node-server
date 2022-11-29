import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    bio: String,
    email: String,
    dob: Date,
    type: {
      type: String,
      enum: ["ADMIN", "NORMAL_USER", "REVIEWER"],
    },
  },
  { collection: "users" }
);

export default usersSchema;
