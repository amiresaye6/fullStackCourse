const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

// server routes imports
const authRoutes = require("./routes/auth.routes");
const habitsRoutes = require("./routes/habits.routes");

const app = express();

app.use(express.json());
app.use(cors()); // on production  we must specify a resource.
app.use(morgan("dev"))

// server routes
app.use("/api/auth", authRoutes);
app.use("/api/habits", habitsRoutes);

mongoose.connect(process.env.MONGODB_CONNECTON_STRING)
    .then(() => {
        console.log("MongoDB connected successfully✔✔✔");
        const PORT = process.env.PORT || 1234;
        app.listen(PORT, () => {
            console.log(`Express serever running on http://localhost:${PORT} successfully✔✔✔`);
        })
    })
    .catch(err => {
        console.log(`Error while running the server\n \n ${err.message}`);
    })