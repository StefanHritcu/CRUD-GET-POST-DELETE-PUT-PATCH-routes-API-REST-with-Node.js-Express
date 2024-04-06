import express from "express"
import { getAllUsers, getFilteredUsers, getUsersStatistics, getUserById } from "../controllers/users.js"

const router = express.Router()

router.get("/", getAllUsers)
router.get("/filtered-users", getFilteredUsers)
router.get("/statistics", getUsersStatistics);

//route with DYNAMIC PARAMETERS always at the end
router.get("/:id", getUserById)

export default router