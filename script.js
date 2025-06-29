const add = require("../string-calculator/src/stringCalculator");

console.log(add(""));  //0
console.log(add("5")); //5
console.log(add("2,4")); //6 
console.log(add("5,6,1,3")); //15
console.log(add("1\n2,3")); //6 //newline
console.log(add("//;\n1;2;4")) //7 //custom delimiter
//console.log(add("-1,2")); //should throw error message
//console.log(add("-1,2,-3,-4,5,6")); //should throw error message
console.log(add("2,,4")); //6
console.log(add("2,4,")); //6
console.log(add("1\n")); //1
console.log(add(" ")); //0
console.log(add("//;;\n1;;2;;3")); //6