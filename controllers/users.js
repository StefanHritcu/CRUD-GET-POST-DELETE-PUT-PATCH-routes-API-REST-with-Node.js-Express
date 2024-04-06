import { User } from "../models/user.js"

let users = []

export const getUserById = async (req, res) => {
    try{
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getAllUsers = async (req, res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}