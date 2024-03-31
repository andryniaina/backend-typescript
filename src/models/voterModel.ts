import mongoose, { Schema } from "mongoose";

const voterSchema = new Schema(
  {
    cin: {
        type: String,
        required: [true, "Please add cin"],
    },
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    firstname: {
      type: String,
      required: [true, "Please add firstname"],
    },
    gender: {
      type: String,
      required: [true, "Please add gender"],
    },
    birthDate: {
      type: String,
      required: [true, "Please add birth date"]
    },
    birthLocation: {
      type: String,
      required: [true, "Please add birth location"]
    },
    dateCin: {
      type: String,
      required: [true, "Please add dateCin"]
    },
    locationCin: {
      type: String,
      required: [true, "Please add locationCin"]
    },
    address: {
      type: String,
      required: [true, "Please add address"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
    },
    password: {
      type: String,
      default: "",
    }
  },
  {
    timestamps: true,
  }
);

const Voter = mongoose.model("Voter", voterSchema);

export default Voter;
