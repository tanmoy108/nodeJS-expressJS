const express = require("express");
const server = express();

const morgan = require("morgan");
server.use(morgan("combined"))

const ProductRouter = require("./routes/productRoutes")
const UserRouter = require("./routes/userRoutes")
server.use(express.json())

server.use("/products",ProductRouter.router)
server.use("/users",UserRouter.router)

server.listen(8000, () => {
  console.log("server started");
});

