const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
