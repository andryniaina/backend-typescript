import mongoose, { Schema } from "mongoose";

const stationSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    region: {
      type: String,
      required: [true, "Please add region"],
    },
    district: {
      type: String,
      required: [true, "Please add district"],
    },
    commune: {
      type: String,
      required: [true, "Please add commune"],
    },
    fokontany: {
      type: String,
      required: [true, "Please add fokontany"],
    },
    centre: {
      type: String,
      required: [true, "Please add centre"],
    },
    code: {
      type: String,
      required: [true, "Please add code"],
    },
    nbVoters: {
      type: String,
      required: [true, "Please add nbVoters"],
    },
  },
  {
    timestamps: true,
  }
);

const Station = mongoose.model("Station", stationSchema);

export default Station;
