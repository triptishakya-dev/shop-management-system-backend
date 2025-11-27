import express from "express";
import { addShop, getshop } from "../controllers/shopController.js";


const router = express.Router();
router.post("/api/user", addShop);
router.get("/api/shop" ,   getshop);
 

export default router;