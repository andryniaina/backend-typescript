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

router.post("/create", protect, createVoterHandler);
router.get("/get", protect, getAllVotersHandler);
router.get("/get/:num", protect, getVoterByNumHandler);
router.put("/update/:num", protect ,updateVoterHandler);
router.delete("/delete/:num", protect, deleteVoterHandler);

export default router;
