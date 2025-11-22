import express from "express";
import { addShop } from "../controllers/shopController";


const router = express.Router();
router.post("/", addShop);

export default router;