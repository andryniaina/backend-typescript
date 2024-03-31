import express from "express";
import {
  createVoterHandler,
  getAllVotersHandler,
  getVoterByNumHandler,
  updateVoterHandler,
  deleteVoterHandler
} from "../controllers/voter.controller";

const { protect } = require('../middleware/authMiddleware')

const router = express.Router();

router.post("/", protect, createVoterHandler);
router.get("/", protect, getAllVotersHandler);
router.get("/:num", protect, getVoterByNumHandler);
router.put("/:num", protect ,updateVoterHandler);
router.delete("/:num", protect, deleteVoterHandler);

export default router;
