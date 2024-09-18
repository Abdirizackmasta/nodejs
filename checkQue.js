const fs = require("node:fs");

fs.readFile(__filename, () => {
  console.log("This is readFile 1");
  setImmediate(() => {
    console.log("This is inner setImmediate inside readFile");
  });
  process.nextTick(() => {
    console.log("This is inner process.nextTick inside readFile");
  });
  Promise.resolve().then(() => {
    console.log("This is inner promise.reslove inside readFile");
  });
});

process.nextTick(() => {
  console.log("This is process.nextTick 1");
});

Promise.resolve().then(() => {
  console.log("This is promise.reslove 1");
});

setTimeout(() => {
  console.log("This is setTimeout 1");
}, 0);

for (let i = 0; i < 2000000000; i++) {}
