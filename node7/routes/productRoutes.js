const express = require("express");
const routes = express.Router()
const products = require("../controller/productController")

routes
  .post("/", products.createProduct)
  .get("/", products.getAllProduct)
  .get("/:id", products.getSpecificProduct)
  .put("/:id", products.replaceProduct)
  .patch("/:id", products.updateProduct)
  .delete("/:id", products.deleteProduct)

exports.router = routes;
