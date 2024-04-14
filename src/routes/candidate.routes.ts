import express from "express";
import {
  createCandidateHandler,
  getAllCandidatesHandler,
  getCandidateByNumHandler,
  updateCandidateHandler,
  deleteCandidateHandler
} from "../controllers/candidate.controller";
import multer from 'multer';
const upload = multer({ dest: "uploads/" });

const { protect } = require('../middleware/authMiddleware')

const router = express.Router();

router.post("/create", upload.single("imageUrl"), protect, createCandidateHandler);
router.get("/get", protect, getAllCandidatesHandler);
router.get("/get/:num", protect, getCandidateByNumHandler);
router.put("/update/:num", upload.single("imageUrl"), protect ,updateCandidateHandler);
router.delete("/delete/:num", protect, deleteCandidateHandler);

export default router;
