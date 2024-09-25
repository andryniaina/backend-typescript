import Voter from '../models/voterModel';

// Create a new Voter
export const createVoter = async (voterData) => {
  try {
    const newVoter = new Voter(voterData);
    const savedVoter = await newVoter.save();
    return savedVoter;
  } catch (error) {
    throw error;
  }
};

// Get Voter by email
export const getVoterByEmail = async (email) => {
  try {
    const voter = await Voter.findOne({ email });
    return voter;
  } catch (error) {
    throw error;
  }
};

// Get all Voters
export const getAllVoters = async () => {
  try {
    const voters = await Voter.find();
    return voters;
  } catch (error) {
    throw error;
  }
};

// Get the number of Voters
export const getNumberOfVoters = async () => {
  try {
    const count = await Voter.countDocuments({ hasVoted: true });
    return count;
  } catch (error) {
    throw error;
  }
};

// Get Voter by numVoter
export const getVoterById = async (numVoter) => {
  try {
    const voter = await Voter.findById(numVoter);
    return voter;
  } catch (error) {
    throw error;
  }
};

// Update Voter by numVoter
export const updateVoter = async (numVoter, updatedData) => {
  try {
    const updatedVoter = await Voter.findByIdAndUpdate(
      numVoter,
      updatedData,
      { new: true }
    );
    return updatedVoter;
  } catch (error) {
    throw error;
  }
};

// Delete Voter by numVoter
export const deleteVoter = async (numVoter) => {
  try {
    const deletedVoter = await Voter.findByIdAndDelete(numVoter);
    return deletedVoter;
  } catch (error) {
    throw error;
  }
};

