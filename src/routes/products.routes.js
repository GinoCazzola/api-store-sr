import express from "express";
import { createProduct } from "../controllers/prodController.js";
import upload from "../libs/main.storage.js";

const route = express.Router()

route.post("/", upload.single("image"), createProduct)


export default route;