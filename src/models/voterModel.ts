import mongoose, { Schema } from "mongoose";

const voterSchema = new Schema(
  {
    registrarId: {
        type: String,
        required: [true, "Please add registrarId"],
    },
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    gender: {
      type: String,
      required: [true, "Please add gender"],
    },
    age: {
      type: Number,
      required: [true, "Please add age"],
    },
    address: {
      type: String,
      required: [true, "Please add address"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
    }
  },
  {
    timestamps: true,
  }
);

const Voter = mongoose.model("Voter", voterSchema);

export default Voter;
