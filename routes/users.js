import express from "express"
import { getAllUsers, getUserById } from "../controllers/users.js"

const router = express.Router()

router.get("/:id", getUserById)
router.get("/", getAllUsers)

export default router