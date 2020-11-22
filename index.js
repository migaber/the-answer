const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let processedSet = {
    casesCount: 0,
    testCases: [],
}

rl.on('line', function (line) {
    if (processedSet.casesCount === 0) {
        processedSet.casesCount = Number(line);
    } else {
        const [a, b] = line.split(' ')
        const query = Number(a);
        const theNumber = Number(b) || false;
        processedSet.testCases.push([query, theNumber]);
    }
})

.on('close', () => {
    solve(processedSet)
    process.exit()
})

function solve({testCases}) {
    let array = [];
    testCases.forEach(element => {
        let command = element[0];
        let theNumber = element[1];

        switch (command) {
            case 1:
                array.push(theNumber);
                break;
            case 2:
                array.pop();
                break;
            case 3:
                console.log(getArrayLargestNumber(array));
                array = []; // reset array and start from scratch
                break;
            default:
                break;
        }
    });
}

function getArrayLargestNumber(array) {
    let sortedArray = array.sort( (a, b) => b - a ); // sort array desc.
    return sortedArray[0];
}
