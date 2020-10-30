

module.exports.generate = function(size) {
    let num1 = 0, num2 = 1;
    let result = [];

    if (size > 0){
        result.push(num1)
    }
    if (size > 1){
        result.push(num2)
    }

    let num3;
    for(let counter = 2; counter < size; counter++)
    {
        num3 = num1 + num2;
        result.push(num3);
        num1 = num2;
        num2 = num3;
    }
}