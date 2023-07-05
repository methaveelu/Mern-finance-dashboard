import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/products", async(req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products);
        // grab kpi data from database. use mongoose (which is a object document mapping tool) which helps us to 
        // set up a data model schema that will make it easy to call our database and grab information it's just a easier way to grab information
        // directly from the database otherwise you'd have to use raw SQL
    }catch(error){
        res.status(404).json({message: error.message});
    }
})

export default router;

//express router to handle GET requests to fetch products from a database using Mongoose. It uses the Express framework along with Mongoose's model to interact with the database and return the fetched products as a JSON response.