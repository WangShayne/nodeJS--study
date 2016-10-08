//一个执行完毕才执行下一个
var fs = require("fs");

var data = fs.readFileSync("input.txt");

console.log(data.toString());
console.log("程序执行完毕!");
