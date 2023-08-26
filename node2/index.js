const fs = require("fs");


const time = performance.now()
console.log(time)


//sync............................
// const txt = fs.readFileSync("demo.txt");
// console.log(txt);


//async............................
fs.readFile("demo.txt",'utf-8',(err,txt) => { console.log(txt) });
