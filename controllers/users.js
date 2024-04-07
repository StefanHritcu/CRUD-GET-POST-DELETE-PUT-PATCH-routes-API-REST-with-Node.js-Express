import { User } from "../models/user.js"

let users = []

//----------------------------  GET  ------------------------------------
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
        //User are all the user(collection) documents
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getFilteredUsers = async (req, res) => {
    try {
        const users = await User.find()
            .where('age').gte(18)
            .where('married').equals(true)
        res.status(200).json(users)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

export const getUsersStatistics = async (req, res) => {
    try{
        const statistics = await User.aggregate([
            {
                $group: {
                    _id: null,
                    totalCount: {$sum: 1},
                    unmarriedCount: { $sum: { $cond: { if: { $eq: ["$married", false] }, then: 1, else: 0 } } }
                }
            }
        ])
        res.status(200).json(statistics)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//----------------------------  POST  ------------------------------------
export const insertUser = async (req, res) => {
        const user = req.body
        const newUser = new User(user)
    try{
        await newUser.save()
        res.status(201).json(newUser)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//----------------------------  DELETE  ------------------------------------
export const deleteAllUsers = async (req, res) => {
    try{
        const result = await User.deleteMany({});
            res.status(200).json({message: "All users was deleted with success"})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const deletUserById = async (req, res) => {
    const { id } = req.params
    try{
       await User.findByIdAndDelete(id)
       res.status(200).json({message: "User deleted with success"})

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//----------------------------  PATCH ------------------------------------
export const updateUserById = async (req, res) => {
    const { id } = req.params
    const data = { ...req.body }

    try{
        const user = await User.findByIdAndUpdate(id, data, {new: true})
        res.status(200).json(user)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//----------------------------  PUT  ------------------------------------
export const replaceUserById = async (req, res) => {
    const { id } = req.params
    const data = { ...req.body }

    try{
        const user = await User.findByIdAndUpdate(id, data, {overwrite: false})
        res.status(200).json(user)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
