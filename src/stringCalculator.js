/**
 * function to add numbers
 * 
 * @param {*} numbers 
 * @returns 
 */
function add(numbers) {
    //empty string returns 0
    if (numbers === "") return 0;

    const inputs = numbers.split(/,|\n/).map(Number);
    return inputs.reduce((sum, n)=> sum + n, 0);
}

module.exports = add;