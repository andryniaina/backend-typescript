import express from "express";
import {
  createStationHandler,
  getAllStationsHandler,
  getStationByNumHandler,
  updateStationHandler,
  deleteStationHandler
} from "../controllers/station.controller";

const { protect } = require('../middleware/authMiddleware')

const router = express.Router();

router.post("/create", protect, createStationHandler);
router.get("/get", protect, getAllStationsHandler);
router.get("/get/:num", protect, getStationByNumHandler);
router.put("/update/:num", protect ,updateStationHandler);
router.delete("/delete/:num", protect, deleteStationHandler);

export default router;
