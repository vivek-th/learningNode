const fs = require("fs");
const os= require("os")

console.log(os.cpus().length)
const { resourceLimits } = require("worker_threads");

console.log("1");
fs.readFile("./contact.txt", "utf-8", (error, result) => {
  if (error) {
    return error;
  } else {
    console.log(result);
  }
});

console.log("2");
  