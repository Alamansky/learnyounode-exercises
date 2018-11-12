const reducer = function(accumulator, currentValue) {
    let currentValueAsNumber = Number(currentValue);
    return Number.isInteger(currentValueAsNumber) ? (accumulator + currentValueAsNumber) : accumulator;
};

console.log(process.argv.reduce(reducer, 0));