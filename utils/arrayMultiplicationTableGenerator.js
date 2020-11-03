
module.exports = {
    generateTable(array) {
        let table = [];
        for (let rowIndex = 0; rowIndex < array.length + 1; rowIndex++) {
            let isHorisontalHeader = rowIndex === 0;
            for (let colIndex = 0; colIndex < array.length + 1; colIndex++) {
                let isVerticalHeader = colIndex === 0;
    
                if (isVerticalHeader) {
                    let number = null;
                    if (!isHorisontalHeader) {
                        let rowNumber = array[rowIndex - 1];
                        number = rowNumber;
                    }
                    
                    table[rowIndex] = []
                    table[rowIndex].push(number);
                }
                else if (isHorisontalHeader) {
                    let colNumber = array[colIndex - 1];
                    table[rowIndex].push(colNumber)
                }
                else {
                    let rowNumber = array[rowIndex - 1];
                    let colNumber = array[colIndex - 1];
    
                    table[rowIndex].push(rowNumber * colNumber)
                }
            }
        }

        return table;
    }
}
