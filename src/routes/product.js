const express = require("express");
const proSchema = require("../models/productos");

const router = express.Router();

// create product
router.post("/products", (req, res) => {
  const user = proSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
