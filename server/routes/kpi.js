import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async(req, res) => {
    try{
        const kpis = await KPI.find();
        res.status(200).json(kpis);
        // grab kpi data from database. use mongoose (which is a object document mapping tool) which helps us to 
        // set up a data model schema that will make it easy to call our database and grab information it's just a easier way to grab information
        // directly from the database otherwise you'd have to use raw SQL
    }catch(error){
        res.status(404).json({message: error.message});
    }
})

export default router;