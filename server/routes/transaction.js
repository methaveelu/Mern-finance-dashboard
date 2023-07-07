import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transactions", async(req, res) => {
    try{
        const transactions = await Transaction.find()
        .limit(50) //limit the data to 50 transactions... prevent server lag
        .sort({createdOn:-1}); // srt by most recent
        
        res.status(200).json(transactions);
    }catch(error){
        res.status(404).json({message: error.message});
    }
})

export default router;