

import express  from "express"
import shopRoute from "./routers/shopRoute.js";   
const app = express();


const port = 3000 ;

app.get("/",(req,res) => {
    res.send("hello")
})

app.use ("/shop",shopRoute)

app.listen(port,() =>{
console.log("my port is listening")
})