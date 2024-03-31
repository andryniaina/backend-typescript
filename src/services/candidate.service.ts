import Candidate from '../models/candidateModel';

// Create a new Candidate
export const createCandidate = async (candidateData) => {
  try {
    const newCandidate = new Candidate(candidateData);
    const savedCandidate = await newCandidate.save();
    return savedCandidate;
  } catch (error) {
    throw error;
  }
};

// Get all Candidates
export const getAllCandidates = async () => {
  try {
    const candidates = await Candidate.find();
    return candidates;
  } catch (error) {
    throw error;
  }
};

// Get Candidate by numCandidate
export const getCandidateById = async (numCandidate) => {
  try {
    const candidate = await Candidate.findById(numCandidate);
    return candidate;
  } catch (error) {
    throw error;
  }
};

// Update Candidate by numCandidate
export const updateCandidate = async (numCandidate, updatedData) => {
  try {
    const updatedCandidate = await Candidate.findByIdAndUpdate(
      numCandidate,
      updatedData,
      { new: true }
    );
    return updatedCandidate;
  } catch (error) {
    throw error;
  }
};

// Delete Candidate by numCandidate
export const deleteCandidate = async (numCandidate) => {
  try {
    const deletedCandidate = await Candidate.findByIdAndDelete(numCandidate);
    return deletedCandidate;
  } catch (error) {
    throw error;
  }
};

