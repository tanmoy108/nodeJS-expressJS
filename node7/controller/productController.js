const fs = require("fs");
const jsonRead = JSON.parse(fs.readFileSync("data.json", "utf-8"))
const dataObj = jsonRead.products


exports.getAllProduct = (req, res) => {
  res.status(200).json(dataObj);
}

exports.getSpecificProduct = (req, res) => {
  const productId = +req.params.id;
  const product = dataObj.find((item) => item.id === productId);
  res.status(200).json(product);
}

exports.createProduct = (req, res) => {
  console.log(req.body)
  dataObj.push(req.body);
  res.json(req.body)
}

exports.replaceProduct = (req, res) => {
  const params = +req.params.id;
  console.log(params);
  const productFindIndex = dataObj.findIndex((item) => item.id == params);
  console.log(productFindIndex);
  dataObj.splice(productFindIndex, 1, { ...req.body, id: params })
  res.json(dataObj[productFindIndex])
}

exports.updateProduct = (req, res) => {
  const params = +req.params.id;
  console.log(params);
  const product = dataObj.find((item) => item.id == params);
  const productFindIndex = dataObj.findIndex((item) => item.id == params);
  console.log(productFindIndex);
  console.log(product);
  dataObj.splice(productFindIndex, 1, { ...product, ...req.body })
  res.json(dataObj[params - 1])
}

exports.deleteProduct = (req, res) => {
  const params = +req.params.id;
  const productFindIndex = dataObj.findIndex((item) => item.id == params);
  dataObj.splice(productFindIndex, 1)
  res.status(201).json(dataObj)
}
