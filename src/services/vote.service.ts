import axios from "axios";
import Voter from "../models/voterModel";
const blockchainUrl = "http://34.132.203.15:8080/api/vote";
const orgApiKey = "ORG1";

export const getAllVotes = async () => {
  try {
    const { data } = await axios.get(`${blockchainUrl}`, {
      headers: {
        "X-Api-Key": orgApiKey,
      },
    });
    console.log({ data });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllStats = async () => {
  try {
    const { data } = await axios.get(`${blockchainUrl}/stats`, {
      headers: {
        "X-Api-Key": orgApiKey,
      },
    });
    console.log({ data });
    return data;
  } catch (error) {
    throw error;
  }
};

// Get the participation rate
export const getParticipationRate = async () => {
  try {
    // Count the total number of voters
    const totalVoters = await Voter.countDocuments();
    
    // Count the number of voters who have voted
    const votersWhoVoted = await Voter.countDocuments({ hasVoted: true });

    // Calculate the participation rate
    const participationRate = totalVoters > 0 ? (votersWhoVoted / totalVoters) * 100 : 0;

    return participationRate;
  } catch (error) {
    throw error;
  }
};
