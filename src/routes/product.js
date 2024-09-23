const express = require("express");
const proSchema = require("../models/productos");

const router = express.Router();

// create product
router.post("/products", (req, res) => {
  const product = proSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all products
router.get("/products", (req, res) => {
  proSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a product
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  proSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a product
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  proSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a product
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, description, image } = req.body;
  proSchema
    .updateOne({ _id: id }, { $set: { title, price, description, image } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
