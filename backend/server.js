import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"

import getProducts from "./routes/getProducts.js"
import createProduct from "./routes/createProducts.js"

dotenv.config()

connectDB()

const app = express()
app.use(express.json());

app.use(cors())

app.get("/", getProducts)
app.post("/", createProduct )

app.get("/", (req,res)=>{
    res.send("API is running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});