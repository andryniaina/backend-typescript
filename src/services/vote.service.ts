import axios from "axios";
import Voter from "../models/voterModel";
import Candidate from "../models/candidateModel";
import { getStationNameById } from "./station.service";
const blockchainUrl = "http://34.66.99.143:6200/api/vote";
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

export const getVotersCountPerStation = async () => {
  try {
    const voters = await Voter.find();
    const voteCountPerStation = voters.reduce((acc, voter:any) => {
      if (acc[voter.station]) {
        acc[voter.station] += 1;
      } else {
        acc[voter.station] = 1;
      }
      return acc;
    }, {} as Record<string, number>);
    return voteCountPerStation;
  } catch (error) {
    throw error;
  }
};

export const getVoteCountPerStation = async () => {
  try {
    interface Vote {
      CandidateID: string,
      Station: string,
      VoterID: string
    }
    const allVotes = await getAllVotes() as Vote[];
    const voteCountPerStation = allVotes.reduce((acc, vote) => {
      if (acc[vote.Station]) {
        acc[vote.Station] += 1;
      } else {
        acc[vote.Station] = 1;
      }
      return acc;
    }, {} as Record<string, number>);
    return voteCountPerStation;
  } catch (error) {
    throw error;
  }
};

export const getVotersParticipationRatePerStation = async () => {
  try {
    const votersCountPerStation = await getVotersCountPerStation();
    const voteCountPerStation = await getVoteCountPerStation();
    console.log({votersCountPerStation,voteCountPerStation}) ;
    const participationRatePerStation = Object.entries(voteCountPerStation).reduce((acc, [station, count]) => {
      acc[station] = (count / votersCountPerStation[station]) * 100;
      return acc;
    }, {} as Record<string, number>);
    console.log({ participationRatePerStation });
    /* const participationRatePerStationWithStationName = Object.entries(participationRatePerStation).reduce(async(acc, [station, participationRate]) => {
      const stationName= await getStationNameById(station);
      acc[stationName] = 
        participationRate ;
      return acc;
    }, {} as Record<string, any>);
    console.log({participationRatePerStationWithStationName})
    return participationRatePerStationWithStationName; */
    let participationRatePerStationWithStationName = {} ;
    for(const key in participationRatePerStation) {
      const stationName = await getStationNameById(key);
      participationRatePerStationWithStationName[stationName] = participationRatePerStation[key];
    }
    return participationRatePerStationWithStationName;
  } catch (error) {
    throw error;
  }
};

export const getVotesPercentagePerStration = async () => {
  try {
    interface Vote {
      CandidateID: string,
      Station: string,
      VoterID: string
    }
    const allVotes = await getAllVotes() as Vote[];
    const voteCountPerStation = allVotes.reduce((acc, vote) => {
      if (acc[vote.Station]) {
        acc[vote.Station] += 1;
      } else {
        acc[vote.Station] = 1;
      }
      return acc;
    }, {} as Record<string, number>);
    const totalVoteCount = await Voter.countDocuments({hasVoted : true});
    const votePercentagePerStation = Object.entries(voteCountPerStation).reduce((acc, [station, count]) => {
      acc[station] = (count / totalVoteCount) * 100;
      return acc;
    }, {} as Record<string, number>);
   /*  const votePercentagePerStationWithStationName = Object.entries(votePercentagePerStation).reduce(async(acc, [station, votePercentage]) => {
      const stationName= await getStationNameById(station);
      acc[stationName] = 
        votePercentage ;
      return acc;
    }, {} as Record<string, any>);
    console.log({votePercentagePerStationWithStationName})
    return votePercentagePerStationWithStationName; */
    let votePercentagePerStationWithStationName = {} ;
    for(const key in votePercentagePerStation) {
      const stationName = await getStationNameById(key);
      votePercentagePerStationWithStationName[stationName] = votePercentagePerStation[key];
    }
    return votePercentagePerStationWithStationName;
  } catch (error) {
    throw error;
  }
};

// get vote percentage per station by candidateId
export const getVotesPercentagePerStationByCandidateId = async (candidateId) => {
  try {
    interface Vote {
      CandidateID: string,
      Station: string,
      VoterID: string
    }
    const allVotes = await getAllVotes() as Vote[];
    const votesForCandidate = allVotes.filter((vote) => vote.CandidateID === candidateId);
    const voteCountPerStation = votesForCandidate.reduce((acc, vote) => {
      if (acc[vote.Station]) {
        acc[vote.Station] += 1;
      } else {
        acc[vote.Station] = 1;
      }
      return acc;
    }, {} as Record<string, number>);
    const totalVoteCount = await votesForCandidate.length;
    const votePercentagePerStation = Object.entries(voteCountPerStation).reduce((acc, [station, count]) => {
      acc[station] = (count / totalVoteCount) * 100;
      return acc;
    }, {} as Record<string, number>); 
    const votePercentagePerStationWithStationName = Object.entries(votePercentagePerStation).reduce(async(acc, [station, votePercentage]) => {
      const stationName= await getStationNameById(station);
      acc[stationName] = 
        votePercentage ;
      return acc;
    }, {} as Record<string, any>);
    console.log({votePercentagePerStationWithStationName})
    return votePercentagePerStationWithStationName;
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
    const voterCount = await Voter.countDocuments({ hasVoted: true });
    const candidates = await Candidate.find();
    const candidatesId = candidates.map((candidate) => candidate._id);
    let result = {} ;
    Object.entries(data).forEach(([key, value]: [any,number]) => {
      result[key] = (value/voterCount)*100 ;
    });
    candidatesId.forEach((candidateId:any) => {
      result[candidateId] = result[candidateId] ? result[candidateId] : 0 ;
    });
    console.log({ data });
    console.log({result});
    return result;
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
