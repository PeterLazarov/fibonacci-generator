const FibonacciSequenceGenerator = require('../utils/fibonacciSequenceGenerator');

describe('fibonacci sequence generation', () => {
    it('fibonacci sequence generation ', () => {
        const sizeTwoSequence = FibonacciSequenceGenerator.generateSequence(2);
        const sizeThreeSequence = FibonacciSequenceGenerator.generateSequence(3);
        const sizeFourSequence = FibonacciSequenceGenerator.generateSequence(4);

        expect(sizeTwoSequence).toEqual([0, 1]);
        expect(sizeThreeSequence).toEqual([0, 1, 1]);
        expect(sizeFourSequence).toEqual([0, 1, 1, 2]);
    });
});