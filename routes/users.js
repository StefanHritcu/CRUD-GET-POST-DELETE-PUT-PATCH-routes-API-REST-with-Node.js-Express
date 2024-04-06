import express from "express"
import { getAllUsers, getFilteredUsers, getUsersStatistics, getUserById, insertUser } from "../controllers/users.js"

const router = express.Router()

router.get("/", getAllUsers)
router.get("/filtered-users", getFilteredUsers)
router.get("/statistics", getUsersStatistics)
router.post("/", insertUser)

//route with DYNAMIC PARAMETERS always at the end
router.get("/:id", getUserById)

export default router