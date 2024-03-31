import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
  createCandidate,
  getAllCandidates,
  getCandidateById,
  updateCandidate,
  deleteCandidate
} from "../services/candidate.service";

export const createCandidateHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      console.log("Body", req.body) ;
      let candidate = await createCandidate(req.body);
      res.status(201).json(candidate);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getAllCandidatesHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      let candidates = await getAllCandidates();
      res.status(200).json(candidates);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getCandidateByNumHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { num } = req.params;
      let candidate = await getCandidateById(num);
      res.status(200).json(candidate);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const updateCandidateHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { num } = req.params;
      let candidate = await updateCandidate(num, req.body);
      res.status(200).json(candidate);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const deleteCandidateHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { num } = req.params;
      let candidate = await deleteCandidate(num);
      res.status(200).json(candidate);
    } catch (error) {
      throw new Error(error);
    }
  }
);