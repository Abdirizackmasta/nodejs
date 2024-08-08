// PIPES

// const fs = require("node:fs/promises");
const fs = require("node:fs");
const zlip = require("noode:zlip");
const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 3,
});

const writableStream = fs.createWriteStream("./file2.txt");
readableStream.pipe(writableStream);
// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writableStream.write(chunk);
// });
// async function readFile() {
//   try {
//     const data = await fs.readFile("file.txt", "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// readFile();
// console.log("first");
// fs.readFile("file.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log("second");

// const EventEmiiter = require("node:events");

// const emitter = new EventEmiiter();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(`oder-received! Baking a ${size} pizza with ${topping}`);
// });

// emitter.emit("order-pizza", "large", "mushroom");

// const PizzaShop = require("./pizza-shop");

// const fs = require("node:fs");

// console.log("first");
// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);
// console.log("second");
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });
// console.log("third");

// fs.writeFileSync("./greet.txt", "Hello World");
// fs.writeFile("./greetMasta.txt", " Hello Masta!", { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Written");
//   }
// });
