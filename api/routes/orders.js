import express from "express"
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from "../controllers/order.js"
const router = express.Router()
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


router.post("/",createOrder)

router.put("/:id", verifyUser, updateOrder)

router.delete("/:id", verifyUser, deleteOrder)

router.get("/:id", verifyUser, getOrder)

router.get("/", verifyUser, getOrders)

export default router