const http = require("http");
const fs = require("fs");

const fileRead = fs.readFileSync("index.html", "utf-8")
const jsonRead = JSON.parse(fs.readFileSync("data.json", "utf-8"))
const dataObj = jsonRead.products

const proxy = http.createServer((req, res) => {

  const requrl = req.url.startsWith("/product");
  if (requrl) {
    console.log(req.url.split('/')[2]);
    const id = req.url.split('/')[2];
    const a = dataObj.find((item) => item.id === (+id));
    console.log(a);
    res.setHeader('Content-Type', 'text/html');
    let newObj = fileRead.replace('**title**', a.title)
      .replace('**url**', a.thumbnail)
      .replace('**price**', a.price)
      .replace('**rating**', a.rating);
    res.end(newObj);
    return;
  }

  console.log(req.url)
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html")
      res.end(fileRead)
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify(jsonRead))
      break;
    default:
      res.writeHead(404);
      res.end()
      break;
  }

  console.log("server started...");
})

proxy.listen(8000);
