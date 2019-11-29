// use the variables below to run Math function
let prevValue;
let prevOp;

let numInputs = [];
let opInputs = [];


function inputNum(number) {
    let currentNumber = document.getElementById('calc').value;
    // console.log(val1);
    // If op is undefined then work on creating var1 //
    if ( currentNumber === '0' ) {
        currentNumber = number;
        numInputs.push(currentNumber);
    } else {
        currentNumber = currentNumber + number;
        numInputs[numInputs.length - 1] = currentNumber;
    }
    document.getElementById('calc').value = currentNumber;
    prevValue = currentNumber;
    createHist();
    clearOp();
}

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

function clearNum() {
    document.getElementById('calc').value = '0';
}

function clearOp() {
    document.getElementById('op').value = '';
}

function inputOp(op) {
    let currentOp = document.getElementById('op').value;

    if ( currentOp === '' ) {
        opInputs.push(op);
    } else {
        opInputs[opInputs.length - 1] = op;
    } 
    document.getElementById('op').value = op;
    prevOp = op;
    prevValue = '0';
    clearNum();
    createHist();
}

function calculate() {
    const operators = ['*', '/', '+', '-'];
    let opIndex = 0;
    debugger;

    while ( opInputs.length > 0 ) {
        const op = operators[opIndex];
        const index = opInputs.findIndex(o => o === op);
        if ( index === -1 ) {
            opIndex ++;
        } else {
            calc(index, op);
        }
    }
    document.getElementById('fullHist').innerHTML = numInputs[0];
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

function equals() {
    calculate();
    lastHist = history;
    prevAns = lastAnsw;
    history = lastHist + ' = ' + prevAns;
    document.getElementById('fullHist').innerHTML = history;
    clearCalc();
}

function makeNeg() {
    let currentNumber = document.getElementById('calc').value;

    if ( currentNumber === 0 || isNaN( currentNumber )) {
        // allows a leading 0 with decimal to happen
        return;
    } 
    currentNumber = Number( currentNumber ) * -1;
    prevValue = currentNumber;
    numInputs[numInputs.length - 1] = currentNumber;
    document.getElementById('calc').value = currentNumber;
}

function allClearCalc() {
    // clears input to 0 and clears all variables
    clearCalc();
    trashHist();
}

function clearCalc() {
    clearNum();
    clearOp();
}

function ans() {
    document.getElementById('calc').value = prevAns;
    prevValue = prevAns;
    val2 = '';
    op = '';
    history = '';
    document.getElementById('hist').innerHTML = history;
}

function decimal() {

}

function trashHist() {
    numInputs = [];
    opInputs = [];
    createHist();
}
