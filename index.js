const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require ("./src/routes/user");
const productRoutes = require ("./src/routes/product");



const port = process.env.PORT || 4200;

app.use(cors({
  origin: 'https://marvalenstore.web.app', // Permite solo esta URL
  methods: 'GET,POST,PUT,DELETE',   // Métodos permitidos
  allowedHeaders: 'Content-Type,Authorization' // Encabezados permitidos
}));

//routes
app.get("/", (req, res) => {
  res.send("Welcome to server");
});

//middleware
app.use(express.json());
app.use('', userRoutes)
app.use('', productRoutes)

//mongobd connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to BD"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));
