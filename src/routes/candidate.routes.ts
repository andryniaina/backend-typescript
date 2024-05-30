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

router.post("/create", upload.single("imageUrl"), createCandidateHandler);
router.get("/get", getAllCandidatesHandler);
router.get("/get/:num", getCandidateByNumHandler);
router.put("/update/:num", upload.single("imageUrl"),updateCandidateHandler);
router.delete("/delete/:num", deleteCandidateHandler);

export default router;
