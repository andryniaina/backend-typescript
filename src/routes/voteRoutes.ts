import {
  getAllStatsHandler,
  getAllVotesHandler,
  getParticipationRateHandler,
  getVotersCountHandler,
  getVotesPercentagePerStrationHandler,
  getVotesPercentagePerStationByCandidateIdHandler,
  getVotersParticipationRatePerStationHandler
} from "../controllers/vote.controller";

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const asyncHandler = require("express-async-handler");

router.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    if (!req.body.candidateId) {
      res.status(400);
      throw new Error("No candidateId provided");
    }
    res
      .status(200)
      .json({
        message: `Vote to ${req.body.candidateId} added to transaction queue`,
      });
  })
);

router.get("/", getAllVotesHandler);
router.get("/votepercandidate", getAllStatsHandler);
router.get("/votercount", getVotersCountHandler);
router.get("/rate", getParticipationRateHandler);
router.get("/voteperstation", getVotesPercentagePerStrationHandler);
router.get("/voteperstationcandidate/:candidateId", getVotesPercentagePerStationByCandidateIdHandler);
router.get("/votersperstation", getVotersParticipationRatePerStationHandler);

export default router;
