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
    
    //custom delimiters case always starts with // 
    if(numbers.startsWith("//")) {
        const inputs = numbers.split("\n");
        delimiter = new RegExp(inputs[0].slice(2)); //custom delimiter
        numbers = inputs[1];
    }
    const nums = numbers.split(delimiter).map(Number);
    return nums.reduce((sum,n)=> sum + n, 0);
}

module.exports = add;