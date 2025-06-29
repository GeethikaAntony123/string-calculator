/**
 * function to add numbers
 * 
 * @param {*} numbers 
 * @returns 
 */
function add(numbers) {
    //empty string returns 0
    if (numbers === "") return 0;

    //handle custom delimiters, 
    let delimiter = /,|\n/;
    //custom delimiters case always starts with '//' 
    if(numbers.startsWith("//")) {
        const inputs = numbers.split("\n");
        delimiter = new RegExp(inputs[0].slice(2)); //custom delimiter
        numbers = inputs[1];
    }
    const nums = numbers.split(delimiter).map(Number);

    //Handles negtive numbers, throws error if negtative number(s) present in input
    const negativeNums = nums.filter(n => n < 0);
    if(negativeNums.length > 0) {
        throw new Error("negative numbers " + negativeNums.join(", ") + " are not allowed");
    }

    //sum
    return nums.reduce((sum,n)=> sum + n, 0);
}

module.exports = add;