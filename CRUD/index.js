const express = require('express');
const cors = require('cors');
const users = require("./sample.json");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PATCH", "DELETE"],
}));

const port = 8000;

app.get("/users",(req,res)=>{
    console.log("Hi")
    console.log(users)
    return res.json(users);
});

app.delete("/users/:id", (req,res)=>{
    let id = Number(req.params.id);
    let filteredUsers = users.filter((user)=> user.id !== id);
    fs.writeFile("./sample.json", JSON.stringify
        (filteredUsers), (err, data)=>{
            return res.json(filteredUsers);
        });
});

app.post("/users",(req,res)=>{
    let{name,age,city} = req.body;
    if(!name || !age || !city) {
        res.status(400).send({message: "All Fields Required"});
    }

    let id = Date.now();
    users.push({id, name, age, city});

    fs.writeFile("./sample.json", JSON.stringify
        (filteredUsers), (err, data)=>{
            return res.json({message : "User details added"});
        });
});


app.patch("/users/:id",(req,res)=>{
    let id = Number(req.params.id);
    let{name,age,city} = req.body;
    if(!name || !age || !city) {
        res.status(400).send({message: "All Fields Required"});
    }

    let index = users.findIndex((user)=> user.id == id);
    users.splice(index, 1,{...req.body});

    fs.writeFile("./sample.json", JSON.stringify
        (filteredUsers), (err, data)=>{
            return res.json({message : "User details updated"});
        });
});


app.listen(port, (err) =>{
    console.log(`App is running ${port}`);
});