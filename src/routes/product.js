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
router.get('/products/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findOne({ id: id });
    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    const { _id, ...resto } = product.toObject();
    res.json({ id: _id.toString(), ...resto });
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
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
