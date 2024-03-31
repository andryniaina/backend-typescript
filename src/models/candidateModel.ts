import mongoose, { Schema } from "mongoose";

const candidateSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    party: {
      type: String,
      required: [true, "Please add party"],
    },
    age: {
      type: Number,
      required: [true, "Please add age"],
    },
    imageUrl: {
      type: String,
      required: [true, "Please add image"],
    },
    description: {
      type: String,
      required: [true, "Please add description"],
    }
  },
  {
    timestamps: true,
  }
);

const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;
