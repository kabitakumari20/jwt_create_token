const express = require("express");
const jwt = require("jsonwebtoken")
const app = express()

app.get('/get',(req,res)=>{
    res.send("hello")
})

const createToken = async()=>{
    const token = await jwt.sign({_id:"955626980"},"manvi")
    console.log(token)
}

createToken();

app.listen(8000,()=>{
    console.log("server is running on port number 8000")
})