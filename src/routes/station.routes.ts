import express from "express";
import {
  createStationHandler,
  getAllStationsHandler,
  getStationByNumHandler,
  updateStationHandler,
  deleteStationHandler,
  createMultipleStationHandler
} from "../controllers/station.controller";

const { protect } = require('../middleware/authMiddleware')

const router = express.Router();

router.post("/create", createStationHandler);
router.post("/create/multiple", createMultipleStationHandler);
router.get("/get", getAllStationsHandler);
router.get("/get/:num", getStationByNumHandler);
router.put("/update/:num", updateStationHandler);
router.delete("/delete/:num", deleteStationHandler);

export default router;
