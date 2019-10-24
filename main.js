// use the variables below to run Math function
let val1 = '';
let val2 = '';
let op = '';
let history = ' ';
let lastAnsw;
let lastHist;
let prevAns;


function inputNum(number) {
    const currentNumber = document.getElementById('calc').value;
    // console.log(val1);
    // If op is undefined then work on creating var1 //
    if ( lastAnsw !== undefined ) {
        if ( op !== '' ) {
            lastAnsw = undefined;
            document.getElementById('calc').value = number;
            val2 = document.getElementById('calc').value;
        } else {
        // do nothing so that user does not override answer from calculation before choosing operator //
        }
    } else if ( op == '' ) {
        if ( currentNumber == 0 ) {
            document.getElementById('calc').value = number;
            val1 = number;
        } else {
            document.getElementById('calc').value = currentNumber + number;
            val1 = document.getElementById('calc').value;
        }
    } else {
        if ( currentNumber == 0 ) {
            document.getElementById('calc').value = number;
            val2 = number;
        } else {
            document.getElementById('calc').value = val2 + number;
            val2 = document.getElementById('calc').value;
        }
    }
}


function myOperator(myOp) {
    console.log(history);
    if ( lastAnsw !== undefined ) {
        val1 = lastAnsw;
        lastAnsw = undefined;
        op = myOp;
        document.getElementById('op').value = myOp;
        histroy = history + val1 + op;
        document.getElementById('hist').innerHTML = history;
    } else if ( op === '' ) {
        op = myOp;
        document.getElementById('op').value = myOp;
        history = history + val1 + op;
        document.getElementById('hist').innerHTML = history;
    } else if ( val2 === '' ) {
        op = myOp;
        document.getElementById('op').value = myOp;
        history = val1 + op;
        document.getElementById('hist').innerHTML = history;
    } else {
        calculate();
        document.getElementById('op').value = myOp;
        op = myOp;
        history = history + op;
        document.getElementById('hist').innerHTML = history;
    }
}

function calculate() {
    history = history + val2;
    document.getElementById('hist').innerHTML = history;
    let answer;
    switch (op) {
    case '+':
        answer = Number(val1) + Number(val2);
        break;
    case '-':
        answer = Number(val1) - Number(val2);
        break;
    case '*':
        answer = Number(val1) * Number(val2);
        break;
    case '&#247;':
        answer = Number(val1) / Number(val2);
        break;
    }
    document.getElementById('calc').value = answer;
    document.getElementById('op').value = '';
    lastAnsw = answer;
    val1 = answer;
    val2 = '';
    op = '';
}

function equals() {
    calculate();
    lastHist = history;
    prevAns = lastAnsw;
    history = lastHist + ' = ' + prevAns;
    document.getElementById('fullHist').innerHTML = history;
    clearCalc();
}

function clearNum() {
    document.getElementById('calc').value = 0;
}

function makeNeg() {
    const num = document.getElementById('calc').value;

    if ( num === 0 || isNaN( num )) {
        // allows a leading 0 with decimal to happen
        document.getElementById('calc').value = 0;
    } else if ( val2 === '' ) {
        document.getElementById('calc').value = Number( num ) * -1;
        val1 = document.getElementById('calc').value;
    } else {
        document.getElementById('calc').value = Number( num ) * -1;
        val2 = document.getElementById('calc').value;
    }
}

function allClearNum() {
    // clears input to 0 and clears all variables
    clearCalc();
    trashHist();
}

function clearCalc() {
    document.getElementById('calc').value = 0;
    document.getElementById('op').value = '';
    document.getElementById('hist').innerHTML = '';

    val1 = '';
    val2 = '';
    op = '';
    lastAnsw = undefined;
    history = '';
}

function ans() {
    document.getElementById('calc').value = prevAns;
    val1 = prevAns;
    val2 = '';
    op = '';
    history = '';
    document.getElementById('hist').innerHTML = history;
}

function decimal() {

}

function trashHist() {
    document.getElementById('fullHist').innerHTML = '';
}
