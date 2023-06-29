import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"

// configuration
dotenv.config()
const app =express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

console.log("hello")

//mongoose setup

const PORT = process.env.PORT || 9000

const mongodbUrl = process.env.MONGO_URL;

mongoose.connect(mongodbUrl, {
useUnifiedTopology: true,
useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.on('connected', () => {
console.log(`MongoDB connection to port ${PORT} successful!`);
});

connection.on('error', (error) => {
console.log('MongoDB connection error:', error);
});



