import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

//routes import
import router from "./routes/route.js"

//routes declaration
app.use("/api", router)

export {app}