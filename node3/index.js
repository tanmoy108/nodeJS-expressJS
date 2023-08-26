//for html
const http = require("http")


const proxy = http.createServer((req,res)=>{
  console.log("server started")


  res.setHeader("key","headervalue")
  res.end("<h1>ken acos</h1>")


})


proxy.listen(8000)

//for json object...............................

const http = require("http")


const obj = {tk:234}
const proxy = http.createServer((req,res)=>{
  console.log("server started")


  res.setHeader("Content-Type","application/json")
  res.end(JSON.stringify(obj))
})


proxy.listen(8000)
