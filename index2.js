// const fs = require("node:fs/promises");
// console.log('first')
// fs.readFile('./file.txt', 'utf-8').then(data => console.log(data)).catch(err => console.log(err))
// console.log('second')






// // const fileContent = fs.readFileSync('./file.txt', 'utf-8');
// // console.log(fileContent)

// // fs.readFile('./file.txt', 'utf-8',(error, data) => {
// //     if (error) {
// //         console.log(error);
// //     } else {
// //         console.log(data)
// //     }
// // })

// // fs.writeFileSync('./greet2.txt', 'Hello World2!');

// // fs.writeFile('./greet2.txt', '  Hello Masta',{flag: 'a'}, (error) => {
// //     if (error) {
// //         console.log(error)
// //     } else {
// //         console.log('File written')
// //     }
// // })

const fs = require("node:fs");
const zlip = require('node:zlip')
const readableStream = fs.createReadStream('./file.txt', {
    encoding: 'utf-8'
});
const writableStream = fs.createWriteStream('./file2.txt')


readableStream.pipe(writableStream)
// readableStream.on('data', (chunk) => {
//     console.log(chunk);
//     writableStream.write(chunk)
// })