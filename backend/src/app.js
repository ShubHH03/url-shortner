import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

//routes import
import router from "./routes/url.route.js"

// For Render
app.get("/healthcheck", (req, res) => {
  res.status(200).send("OK");
});


//routes declaration
app.use("/api", router)

export {app}