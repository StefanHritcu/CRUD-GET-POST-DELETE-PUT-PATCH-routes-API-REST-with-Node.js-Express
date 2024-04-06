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
        //User are all the user(collection) documents
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


export const getFilteredUsers = async (req, res) => {
    try {
        // Costruisci la query Mongoose per trovare gli utenti con un'età maggiore o uguale a 18 anni e che sono sposati
        const users = await User.find()
            .where('age').gte(18) // Utenti con almeno 18 anni
            .where('married').equals(true); // Utenti che sono sposati

        // Invia gli utenti trovati come risposta
        res.status(200).json(users);
    } catch (error) {
        // Gestisci eventuali errori
        res.status(400).json({ message: error.message });
    }
};

