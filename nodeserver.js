const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const name = "Masta";
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res)
    let fileContent = fs.readFileSync('./index.html', 'utf-8')
    fileContent = fileContent.replace("{{name}}", name)
    res.end(fileContent);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/services") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Service Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Bruce",
        lastName: "Lee",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
});

server.listen(4000, () => {
  console.log("server running on port 4000");
});
