import express from "express";
import { createProduct, getProducts } from "../controllers/prodController.js";
import upload from "../libs/main.storage.js";

const route = express.Router()

route
.post("/", upload.single("image"), createProduct)
.get("/", getProducts)


export default route;