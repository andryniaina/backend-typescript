import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
  createVoter,
  getAllVoters,
  getVoterById,
  updateVoter,
  deleteVoter,
  getVoterByEmail
} from "../services/voter.service";
import Voter from "../models/voterModel";

export const createVoterHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      console.log("Body", req.body) ;
      let voter = await createVoter(req.body);
      res.status(201).json(voter);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getAllVotersHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      let voters = await getAllVoters();
      res.status(200).json(voters);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getVoterByNumHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { num } = req.params;
      let voter = await getVoterById(num);
      res.status(200).json(voter);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const updateVoterHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { num } = req.params;
      let voter = await updateVoter(num, req.body);
      res.status(200).json(voter);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const deleteVoterHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { num } = req.params;
      let voter = await deleteVoter(num);
      res.status(200).json(voter);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const loginVoter = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await Voter.findOne({ email })

  if (user && (password === user.password)) {
    res.json({
      ...user,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

export const getVoterByEmailHandler = asyncHandler(async (req, res) => {
  const { email } = req.body

  // Check for user email
  const user = await getVoterByEmail(email)

  if (user) {
    res.status(200).json({
      ...user,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}