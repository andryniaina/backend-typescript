import express from "express";
import {
  createCandidateHandler,
  getAllCandidatesHandler,
  getCandidateByNumHandler,
  updateCandidateHandler,
  deleteCandidateHandler
} from "../controllers/candidate.controller";

const { protect } = require('../middleware/authMiddleware')

const router = express.Router();

router.post("/create", protect, createCandidateHandler);
router.get("/get", protect, getAllCandidatesHandler);
router.get("/get/:num", protect, getCandidateByNumHandler);
router.put("/update/:num", protect ,updateCandidateHandler);
router.delete("/delete/:num", protect, deleteCandidateHandler);

export default router;
