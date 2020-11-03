
module.exports = {
    generateSequence(size) {
        let sequence = [];
        let num1 = 0, num2 = 1;

        if (size > 0) {
            sequence.push(num1);
        }
        if (size > 1) {
            sequence.push(num2);
        }

        let num3;
        for (let counter = 2; counter < size; counter++) {
            num3 = num1 + num2;
            sequence.push(num3);
            num1 = num2;
            num2 = num3;
        }
        return sequence;
    }
}
