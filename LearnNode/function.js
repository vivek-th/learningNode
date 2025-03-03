const fs = require("fs");
fs.writeFile("./test.txt", "I m vivek ansync", (error) => {});

// const result= fs.readFileSync("./contact.txt", "utf-8")
// console.log(result)

const result = fs.readFile("./contact.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
fs.cpSync('./contact.txt','./copy.txt')

fs.appendFileSync("./contact.txt",` ${Date.now()} hey there how are use \n`)

const { addFn, subFn } = require("./math");
console.log(addFn(3, 4));
console.log(subFn(3, 4));
// console.log(math)

// fs.unlinkSync('./copy.txt')
console.log(fs.statSync("test.txt"))
fs.mkdirSync("mydocs/a/ab",{recursive: true})
