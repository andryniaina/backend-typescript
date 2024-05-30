import express from "express";
import {
  createVoterHandler,
  getAllVotersHandler,
  getVoterByNumHandler,
  updateVoterHandler,
  deleteVoterHandler,
  loginVoter
} from "../controllers/voter.controller";

const { protect } = require('../middleware/authMiddleware')

const router = express.Router();

router.post("/create", createVoterHandler);
router.post("/login", loginVoter);
router.get("/get", getAllVotersHandler);
router.get("/get/:num", getVoterByNumHandler);
router.put("/update/:num", updateVoterHandler);
router.delete("/delete/:num", deleteVoterHandler);

export default router;
