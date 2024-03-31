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

export default router ;
