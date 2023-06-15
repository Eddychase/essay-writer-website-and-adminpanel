import express from "express"
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from "../controllers/order.js"
const router = express.Router()
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


router.post("/",createOrder)

router.put("/:id", updateOrder)

router.delete("/:id", deleteOrder)

router.get("/:id",  getOrder)

router.get("/",  getOrders)

export default router