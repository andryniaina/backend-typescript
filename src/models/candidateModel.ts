import mongoose, { Schema } from "mongoose";

const candidateSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    partyEntity: {
      type: String,
      required: [true, "Please add partyEntity"],
    },
    compaignLocation: {
      type: String,
      required: [true, "Please add compaignLocation"],
    },
    dateBirth: {
      type: String,
      required: [true, "Please add dateBirth"],
    },
    birthLocation: {
      type: String,
      required: [true, "Please add birthLocation"],
    },
    cin: {
      type: String,
      required: [true, "Please add cin"],
    },
    dateCin: {
      type: String,
      required: [true, "Please add dateCin"]
    },
    locationCin: {
      type: String,
      required: [true, "Please add locationCin"]
    },
    imageUrl: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: [true, "Please add description"],
    },
  },
  {
    timestamps: true,
  }
);

const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;
