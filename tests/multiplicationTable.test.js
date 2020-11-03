const MultiplicationTableGenerator = require('../utils/arrayMultiplicationTableGenerator');
const FibonacciSequenceGenerator = require('../utils/fibonacciSequenceGenerator');

describe('multiplacation table generation', () => {
    it('multiplacation table generation ', () => {
        let arrayOne = [1, 2];
        let arrayTwo = [1, 2, 3];
        const arrayOneSequence = MultiplicationTableGenerator.generateTable(arrayOne);
        const arrayTwoSequence = MultiplicationTableGenerator.generateTable(arrayTwo);

        expect(arrayOneSequence).toEqual([[null, 1, 2], [1, 1, 2], [2, 2, 4]]);
        expect(arrayTwoSequence).toEqual([[null, 1, 2, 3], [1, 1, 2, 3], [2, 2, 4, 6], [3, 3, 6, 9]]);
    });

    it('fibonacci multiplacation table generation ', () => {
        const sizeTwoSequence = FibonacciSequenceGenerator.generateSequence(2);
        const sizeThreeSequence = FibonacciSequenceGenerator.generateSequence(3);
        const sizeFourSequence = FibonacciSequenceGenerator.generateSequence(4);

        const sizeTwoTable = MultiplicationTableGenerator.generateTable(sizeTwoSequence);
        const sizeThreeTable = MultiplicationTableGenerator.generateTable(sizeThreeSequence);
        const sizeFourTable = MultiplicationTableGenerator.generateTable(sizeFourSequence);

        expect(sizeTwoTable).toEqual([[null, 0, 1], [0, 0, 0], [1, 0, 1]]);
        expect(sizeThreeTable).toEqual([[null, 0, 1, 1], [0, 0, 0, 0], [1, 0, 1, 1], [1, 0, 1, 1]]);
        expect(sizeFourTable).toEqual([[null, 0, 1, 1, 2], [0, 0, 0, 0, 0], [1, 0, 1, 1, 2], [1, 0, 1, 1, 2], [2, 0, 2, 2, 4]]);
    });
});