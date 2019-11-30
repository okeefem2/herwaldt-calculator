let numInputs = [];
let opInputs = [];

//Define numbers and operators for calculation
function inputNum(number) {
    let currentNumber = document.getElementById('calc').value;
    if ( currentNumber === '0' ) {
        currentNumber = number;
        numInputs.push(currentNumber);
    } else {
        currentNumber = currentNumber + number;
        numInputs[numInputs.length - 1] = currentNumber;
    }
    document.getElementById('calc').value = currentNumber;
    createHist();
    clearOp();
}

function inputOp(op) {
    let currentOp = document.getElementById('op').value;

    if ( currentOp === '' ) {
        opInputs.push(op);
    } else {
        opInputs[opInputs.length - 1] = op;
    } 
    document.getElementById('op').value = op;
    clearNum();
    createHist();
}

function makeNeg() {
    let currentNumber = document.getElementById('calc').value;

    if ( currentNumber === 0 || isNaN( currentNumber )) {
        // allows a leading 0 with decimal to happen
        return;
    } 
    currentNumber = Number( currentNumber ) * -1;
    numInputs[numInputs.length - 1] = currentNumber;
    document.getElementById('calc').value = currentNumber;
}

//create history to display
function createHist() {
    let hist = '';
    for ( i = 0; i < numInputs.length; i++) {
        hist += numInputs[i];
        if ( opInputs[i] !== undefined ) {
            hist += opInputs[i];
        }
    }
    document.getElementById('hist').innerHTML = hist;
}


//Calculate functions
function calculate() {
    const operators = ['*', '/', '+', '-'];
    let opIndex = 0;
    while ( opInputs.length > 0 ) {
        const op = operators[opIndex];
        const index = opInputs.findIndex(o => o === op);
        if ( index === -1 ) {
            opIndex ++;
        } else {
            calc(index, op);
        }
    }
    currentNumber = numInputs[0];
    document.getElementById('fullHist').innerHTML = currentNumber;
    document.getElementById('calc').value = currentNumber;
}

function calc(index, op) {
    const val1 = numInputs[index];
    const val2 = numInputs[index + 1];
    let answer = 0;
    switch (op) {
        case '*':
            answer = Number(val1) * Number(val2);
            break;
        case '/': // divide symbol
            answer = Number(val1) / Number(val2);
            break;
        case '+':
            answer = Number(val1) + Number(val2);
            break;
        case '-':
            answer = Number(val1) - Number(val2);
            break;
    }
    opInputs.splice(index,1);
    numInputs.splice(index,2,answer);
}

//Clear sections of calculations below
function allClearCalc() {
    // clears input to 0 and clears all variables
    clearCalc();
    trashHist();
}

function clearCalc() {
    clearNum();
    clearOp();
}

function clearNum() {
    document.getElementById('calc').value = '0';
}

function clearOp() {
    document.getElementById('op').value = '';
}

function trashHist() {
    numInputs = [];
    opInputs = [];
    createHist();
}

function trashFullHist() {
    document.getElementById('fullHist').innerHTML = '';
}

//bring back previous answer for calculation
function oldAns() {
    numInputs = [];
    opInputs = [];
    currentNumber = document.getElementById('fullHist').innerHTML;
    document.getElementById('fullHist').value = "";
    document.getElementById('calc').value = currentNumber;
    numInputs.push(currentNumber);
    createHist();
    clearOp();
}

function decimal() {

}
