import express, { json } from "express"
import usersRouter from "./routes/users.js"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000
const CONNECTION_URL = "mongodb://localhost:27017/git-operations"

app.use(json())
app.use("/users", usersRouter)
app.use(cors())



mongoose.connect(CONNECTION_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`server running on: ${PORT}`)
    })
})
.catch(error => console.log(error))