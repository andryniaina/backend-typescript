import mongoose, { Schema } from "mongoose";

const stationSchema = new Schema(
  {
    name: {
        type: String,
        required: [true, "Please add name"],
    },
    address: {
        type: String,
        required: [true, "Please add address"],
    },
  },
  {
    timestamps: true,
  }
);

const Station = mongoose.model("Station", stationSchema);

export default Station;
