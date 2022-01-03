const express = require("express")
const app = express();
require("dotenv").config()
const morgan = require("morgan")
const Router = require("./routes/router")

const port = process.env.PORT

app.use(express.json())
app.use(Router)
app.use(morgan("dev"))

app.listen(port, ()=>{
    console.log(`server listening on ${port}`)
});