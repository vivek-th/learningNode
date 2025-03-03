// this is work for 27 november

const http = require("http");
const fs = require("fs");
const port = 8000;

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New Request is received  from ${req.url}\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    
  });
  console.log("new req is received");
//   console.log(req.headers);
switch(req.url){
    case '/': res.end("Homepage")
    break
    case'/about':res.end("this is vivek thakur")
    break
    default: res.end("404 not found")
}
});

myServer.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
