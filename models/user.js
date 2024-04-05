import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    married: {
        type: Boolean,
        require: true
    },
    email: {
        type: String,
        require: true
    },
}, {timestamps: true})
export const User = mongoose.model("user", userSchema)