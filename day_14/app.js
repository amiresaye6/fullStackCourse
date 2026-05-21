// console.log("my name is amir alsayed");


// the old way fo making backend apis in node.js

// const http = require('http'); 


// const server = http.createServer((req, res) => {
//     res.end(JSON.stringify({name: "amir alsayed", age: 24}));
// });


// server.listen(1234);

// new way using express.js

const products = [];

const express = require("express");

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    console.log("request form frontedn to teh /");
    res.send("hi, i am amir");

})

app.get("/amir", (req, res) => {
    console.log("request form frontend at the /amir");
    res.json({
        name: " Amir alsayed abdulsamea",
        age: 24,
        department: "os"
    });

})

// RESTFul api

app.get("/products", (req, res) => {
    console.log("REQUEST TO GET ALL PRODUCTS");

    res.status(200).json({
        mesage: "get all products",
        products,
        total: products.length,
    })

})

app.post("/products", (req, res) => {
    console.log("product added to teh server");
    console.log(req.body);
    products.push(req.body);

    res.status(201).json({
        message: "product created successfully",
        product: req.body
    });
    // res.send("product created successfully");

})


app.post("/login", (req, res) => {
    const userName = "amiralsayed"
    const password = "123456789"

    const user = req.body;

    if(!user || !user.userName || !user.password) {
        return res.status(403).json(
            {
                message: "userName and password are required"
            }
        )
    }

    if(user.userName !== userName || user.password !== password ) 
    {
        return res.status(401).json({
            message: "username or passwrod are incorrect"
        })
    }

    res.status(200).json({
        message: "user logged in successfully7",
        token: "2341234324124828134092134234723048231049098098098402342374234-2312",
        user: {
            name: "Amir alsayed",
            id: 1, 
            age: 24,
            dept: "OS"
        }
    })

})

app.listen(1234, () => {
    console.log("server is running on port 1234");
})