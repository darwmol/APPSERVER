const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require ("./src/routes/user");


const port = process.env.PORT || 9000;

//routes
app.get("/", (req, res) => {
  res.send("Welcome to server");
});

//middleware
app.use(express.json());
app.use('/api', userRoutes)



//mongobd connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to BD"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));
