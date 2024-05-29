import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
    getAllStats,
    getAllVotes
} from "../services/vote.service";

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
