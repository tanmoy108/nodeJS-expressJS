const fs = require("fs");
const fileRead = fs.readFileSync("index.html", "utf-8")
const jsonRead = JSON.parse(fs.readFileSync("data.json", "utf-8"))
const dataObj = jsonRead.products

const express = require("express");
const server = express();


//middleware...........................................

//middleware 1
server.use((req,res,next)=>{
  console.log(req.method, req.hostname, req.query, req.get("User-Agent"))
  next();
})

//middleware 2
const auth = (req,res,next)=>{
  console.log(`11111`)
  if(req.query.password=='123')
  {
    next()
  }
  else
  res.sendStatus(404);
}
// server.use(auth);

//API- Endpoint - Roouter.............................................
server.get("/",(req,res)=>{
  res.json({type:"GET"})
})
server.post("/",auth,(req,res)=>{
  res.json({type:"POST"})
})
server.put("/",(req,res)=>{
  res.json({type:"PUT"})
})
server.delete("/",(req,res)=>{
  res.json({type:"DELETE"})
})
server.patch("/",(req,res)=>{
  res.json({type:"PATCH"})
})

//.........................................................................
// server.get("/", (req, res) => {

//   // res.sendStatus(404);
//   // res.status(200).send("<h1>hello</h1>")
//   // res.sendFile("D:/web/node/learn/index.html")
//   // res.json(dataObj)
// })

server.listen(8000, () => {
  console.log("server started");
});

