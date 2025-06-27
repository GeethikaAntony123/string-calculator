/**
 * function to add numbers
 * 
 * @param {*} numbers 
 * @returns 
 */
function add(numbers) {
    //empty string returns 0
    if (numbers === "") return 0;
    
    //single input returns the input
    if(!numbers.includes(",")) return parseInt(numbers);
}

module.exports = add;