import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import kpiRoutes from "./routes/kpi.js"
import KPI from "./models/KPI.js";
import { kpis , products, transactions} from "./data/data.js";
import productRoutes from "./routes/product.js"
import Product from "./models/Product.js";
import transactionRoutes from "./routes/transaction.js"
import Transaction from "./models/Transaction.js"


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

// routes (entry points for routes)
app.use("/kpi", kpiRoutes)
app.use("/product", productRoutes)
app.use("/transaction", transactionRoutes)

//mongoose setup

const PORT = process.env.PORT || 9000

mongoose
    .connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(async () => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

        /* ADD DATA ONE TIME ONLY OR AS NEEDED */
        // await mongoose.connection.db.dropDatabase(); // drop current database, so we dont have duplicates..
        // KPI.insertMany(kpis);//instructing Mongoose to use array method to insert all the documents in the kpis array into the KPI collection. This operation will asynchronously save all the documents to the database.
        // Product.insertMany(products);
        // Transaction.insertMany(transactions);
    })
    .catch((error) => console.log(`${error} did not connect`));


