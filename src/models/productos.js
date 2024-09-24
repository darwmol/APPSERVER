const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const proSchema = mongoose.Schema({
  id: { type: Number, unique: true },

  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
proSchema.plugin(AutoIncrement, { inc_field: "id" });
module.exports = mongoose.model("Product", proSchema);
