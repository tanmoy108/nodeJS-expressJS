const fs = require("fs");
const jsonRead = JSON.parse(fs.readFileSync("data.json", "utf-8"))
const dataObj = jsonRead.users


exports.getAllUser = (req, res) => {
  res.status(200).json(dataObj);
}

exports.getSpecificUser = (req, res) => {
  const userId = +req.params.id;
  const user = dataObj.find((item) => item.id === userId);
  res.status(200).json(user);
}

exports.createUser = (req, res) => {
  console.log(req.body)
  dataObj.push(req.body);
  res.json(req.body)
}

exports.replaceUser = (req, res) => {
  const params = +req.params.id;
  console.log(params);
  const userFindIndex = dataObj.findIndex((item) => item.id == params);
  console.log(userFindIndex);
  dataObj.splice(userFindIndex, 1, { ...req.body, id: params })
  res.json(dataObj[userFindIndex])
}

exports.updateUser = (req, res) => {
  const params = +req.params.id;
  console.log(params);
  const user = dataObj.find((item) => item.id == params);
  const userFindIndex = dataObj.findIndex((item) => item.id == params);
  console.log(userFindIndex);
  console.log(user);
  dataObj.splice(userFindIndex, 1, { ...user, ...req.body })
  res.json(dataObj[params - 1])
}

exports.deleteUser = (req, res) => {
  const params = +req.params.id;
  const userFindIndex = dataObj.findIndex((item) => item.id == params);
  dataObj.splice(userFindIndex, 1)
  res.status(201).json(dataObj)
}
