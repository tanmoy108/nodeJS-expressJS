const fs = require("fs");
// const fileRead = fs.readFileSync("index.html", "utf-8")
// const jsonRead = JSON.parse(fs.readFileSync("data.json", "utf-8"))
// const dataObj = jsonRead.products

const express = require("express");
const server = express();
const morgan = require("morgan");


//middleware...........................................
server.use(express.json())//for body parser, send anything use request body
// server.use(express.urlencoded())
// server.use(express.static("public"))


//middleware 1
// server.use((req, res, next) => {
//   console.log(req.method, req.hostname, req.query, req.get("User-Agent"))
//   next();
// })

//third party middleware (logger)
server.use(morgan("combined"))

//middleware 2 ................. body method
const auth = (req, res, next) => {
  console.log(`11111`)
  // if (req.body.password == '123') {
  //   next()
  // }
  // else
  //   res.sendStatus(401);
  next()
}
// server.use(auth);

//middleware 3 ................... query method
const auth2 = (req, res, next) => {
  // if (req.query.password == '123') {
  //   next()
  // }
  // else
  //   res.sendStatus(401);
  next()
}
// server.use(auth);

//API- Endpoint - Roouter.............................................
// ............ param method
server.get("/product/:id", auth, (req, res) => {
  console.log(req.params) //id value
  res.json({ type: "GET" })
})
server.post("/", (req, res) => {
  res.json({ type: "POST" })
})
server.put("/", (req, res) => {
  res.json({ type: "PUT" })
})
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" })
})
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" })
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

