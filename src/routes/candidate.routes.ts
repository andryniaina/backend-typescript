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

router.post("/", protect, createCandidateHandler);
router.get("/", protect, getAllCandidatesHandler);
router.get("/:num", protect, getCandidateByNumHandler);
router.put("/:num", protect ,updateCandidateHandler);
router.delete("/:num", protect, deleteCandidateHandler);

export default router;
