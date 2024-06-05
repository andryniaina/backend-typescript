import { getAllStatsHandler, getAllVotesHandler, getParticipationRateHandler, getVotersCountHandler } from "../controllers/vote.controller";

const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const asyncHandler = require('express-async-handler')

router.post('/',protect, asyncHandler(async(req,res)=>{
    if(!req.body.candidateId){
        res.status(400)
        throw new Error("No candidateId provided") ;
    }
    res.status(200).json({message: `Vote to ${req.body.candidateId} added to transaction queue`}) ;
}));

router.get('/',getAllVotesHandler) ;
router.get('/votepercandidate',getAllStatsHandler) ;
router.get('/votercount',getVotersCountHandler) ;
router.get('/rate',getParticipationRateHandler) ;

export default router ;
