const fs = require("node:fs");

setTimeout(() => {
  console.log("This is setTimeout 1");
}, 0);

fs.readFile(__filename, () => {
  console.log("This is readFile 1");
});
