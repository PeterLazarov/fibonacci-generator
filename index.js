const SequenceGenerator = require('./utils/fibonacciSequenceGenerator');
const MultiplicationTableGenerator = require('./utils/arrayMultiplicationTableGenerator');

module.exports.generate = function(size) {
    sequence = SequenceGenerator.generateSequence(size);

    return MultiplicationTableGenerator.generateTable(sequence);
}
