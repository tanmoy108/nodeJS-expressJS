const fs = require("fs");
// const fileRead = fs.readFileSync("index.html", "utf-8")
const jsonRead = JSON.parse(fs.readFileSync("data.json", "utf-8"))
const dataObj = jsonRead.products

const express = require("express");
const server = express();
const morgan = require("morgan");
server.use(express.json())
server.use(morgan("combined"))


//REST API
//Read GET- all product
server.get("/products/", (req, res) => {
  res.status(200).json(dataObj);
})

//Read GET - specific product
server.get("/products/:id", (req, res) => {
  const productId = +req.params.id;
  const product = dataObj.find((item) => item.id === productId);
  res.status(200).json(product);
})

//Create POST
server.post("/products/", (req, res) => {
  console.log(req.body)
  dataObj.push(req.body);
  res.json(req.body)
})

//overwrite PUT
server.put("/products/:id", (req, res) => {
  const params = +req.params.id;
  console.log(params);
  const productFindIndex = dataObj.findIndex((item) => item.id == params);
  console.log(productFindIndex);
  console.log(product);
  dataObj.splice(productFindIndex, 1, { ...req.body, id: params })
  res.json(dataObj[productFindIndex])
})

//not overwrite just value change PATCH
server.patch("/products/:id", (req, res) => {
  const params = +req.params.id;
  console.log(params);
  const product = dataObj.find((item) => item.id == params);
  const productFindIndex = dataObj.findIndex((item) => item.id == params);
  console.log(productFindIndex);
  console.log(product);
  dataObj.splice(productFindIndex, 1, { ...product, ...req.body })
  res.json(dataObj[params - 1])
})

//delete DELETE
server.delete("/products/:id",(req,res)=>{
  const params = +req.params.id;
  const productFindIndex = dataObj.findIndex((item) => item.id == params);
  dataObj.splice(productFindIndex, 1)
  res.status(201).json(dataObj)
})

server.listen(8000, () => {
  console.log("server started");
});

