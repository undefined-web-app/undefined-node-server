import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    content: { type: String, required: true },
    score: Number,
    imdbID: { type: String, required: true },
    time: { type: Number, required: true },
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
  },
  { collection: "reviews" }
);

export default reviewsSchema;
