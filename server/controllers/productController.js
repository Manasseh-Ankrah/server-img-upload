// const express = require("express");
// const app = express();
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .then((result) => {
        return res.status(200).json({
          data: result,
          message: "Successfull",
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: error.message,
        });
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add new Product
const addProducts = async (req, res) => {
  const { productName, price, description } = req.body;
  console.log("body  ==>>", req.body);
  console.log("image file ==>>", req.file);

  try {
    console.log({ productName, price, description });
    const product = await new Product({
      productName: productName,
      price: price,
      productImage: "uploads/" + req.file.filename,
      description: description,
    });
    const saveProduct = await product.save().then((result) => {
      return res.status(201).json({
        data: result,
        message: "Product Added Successfully!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getProducts, addProducts };
