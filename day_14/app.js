// console.log("my name is amir alsayed");


// the old way fo making backend apis in node.js

// const http = require('http'); 


// const server = http.createServer((req, res) => {
//     res.end(JSON.stringify({name: "amir alsayed", age: 24}));
// });


// server.listen(1234);

// new way using express.js


const env = require('dotenv');
env.config();
const mongoose = require("mongoose")

const products = [];

const express = require("express");
const logRequists = require("./customLogger");
const { saveBlogToDB, getBlogsFromDb, deleteBlogFromDB } = require("./blogsService");
const Task = require('./models/tasks.model');

const tasksRoute = require("./routes/tasks.route");

const app = express();

app.use(express.json())
app.use(logRequists)



app.use("/api", tasksRoute);

// tasks routes usign mongodb database

// create  a new task

// console.log(process.env);


mongoose.connect(process.env.MONGODB_CONNECTON_STRING)
    .then(() => console.log("dt connected successfully"))
    .catch(err => console.log(err.message))

app.listen(1234, () => {
    console.log("server is running on port 1234");
})