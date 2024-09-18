setTimeout(() => 
  console.log('this is setTimeout 1')
, 1000)
setTimeout(() => 
  console.log('this is setTimeout 2')
, 500)
setTimeout(() => 
  console.log('this is setTimeout 3')
, 0)

// process.nextTick(() => {
//   console.log("This is process.nextTick 1");
// });
// process.nextTick(() => {
//   console.log("This is process.nextTick 2");
//   process.nextTick(() => {
//   console.log("This is inner process.nextTick inside next tick block");
// });
// });
// process.nextTick(() => {
//   console.log("This is process.nextTick 3");

// });

// Promise.resolve().then(() => {
//   console.log("This is promise.reslove 1");
// });
// Promise.resolve().then(() => {
//   console.log("This is promise.reslove 2");
//   process.nextTick(() => {
//   console.log("This is process.nextTick inside promise block");
// });
// });

// Promise.resolve().then(() => {
//   console.log("This is promise.reslove 3");
// });


