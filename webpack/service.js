const express = require("express")

const app = express()
app.get("/api/info", (req, res)=>{
    res.json({
        name: "hello"
    })
})
app.listen(9092)