import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
    getAllStats,
    getAllVotes,
    getParticipationRate,
    getVotesPercentagePerStration
} from "../services/vote.service";
import { getNumberOfVoters } from "../services/voter.service";

export const getAllStatsHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const data = await getAllStats() ;
      res.status(200).json(data);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getVotesPercentagePerStrationHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const data = await getVotesPercentagePerStration() ;
      res.status(200).json(data);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getAllVotesHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const data = await getAllVotes();
      res.status(200).json(data);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getVotersCountHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const count = await getNumberOfVoters();
      res.status(200).json({voterCount: count});
    } catch (error) {
      throw new Error(error);
    }
  }
)

export const getParticipationRateHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const rate = await getParticipationRate();
      res.status(200).json({participationRate: rate});
    } catch (error) {
      throw new Error(error);
    }
  }
)
