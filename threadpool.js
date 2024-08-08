const fs = require("node:fs");

console.log("first");

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("file content");
});

console.log("last");
