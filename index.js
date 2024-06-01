import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import productsRoutes from "./src/routes/products.routes.js";
import { dbConection } from "./src/data/dbConection.js";


const server = express()

dotenv.config()

const api = async () => {
    await dbConection()
    server.use(express.json())
    server.use(cors())
    server.use('/public', express.static( `./temp/imgs`))
    server.use("/api/products", productsRoutes)

server.listen(process.env.PORT, () => console.log ( `servidor corriento en el puerto${process.env.PORT}` ))

}

api()