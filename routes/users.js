import express from "express"
import { getAllUsers, getFilteredUsers, getUsersStatistics, getUserById, insertUser, deleteAllUsers } from "../controllers/users.js"

const router = express.Router()

router.get("/", getAllUsers)
router.post("/", insertUser)
router.get("/filtered-users", getFilteredUsers)
router.get("/statistics", getUsersStatistics)
router.delete("/", deleteAllUsers)

//route with DYNAMIC PARAMETERS always at the end
router.get("/:id", getUserById)

export default router