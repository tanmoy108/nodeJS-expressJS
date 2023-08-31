const express = require("express");
const routes = express.Router()
const users = require("../controller/userController")

routes
  .post("/", users.createUser)
  .get("/", users.getAllUser)
  .get("/:id", users.getSpecificUser)
  .put("/:id", users.replaceUser)
  .patch("/:id", users.updateUser)
  .delete("/:id", users.deleteUser)

exports.router = routes;
