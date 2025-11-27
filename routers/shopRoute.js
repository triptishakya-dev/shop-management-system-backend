import express from "express";
import { addShop, deleteShop, getshop, getShopById, updateShop } from "../controllers/shopController.js";


const router = express.Router();
router.post("/api/user", addShop);
router.get("/api/shop" ,   getshop);
router.get("/api/shop/:id" ,   getShopById);
router.delete("/api/deleteShop/:id" , deleteShop)
router.put("/api/updateShop/:id" ,  updateShop)
 

export default router;