import express from "express"
import { getAllUsers, getFilteredUsers, getUserById } from "../controllers/users.js"

const router = express.Router()

router.get("/", getAllUsers)
router.get("/filtered-users", getFilteredUsers)
router.get("/:id", getUserById)

export default router