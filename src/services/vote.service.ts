import axios from "axios";
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
