let numInputs = [];
let opInputs = [];

/**
  * User clicks an onscreen number which is passed to the function below.
  * The function determines if the number entered is the first number of a new value
  * or if the user is adding on to the current value.
  * @param {string} number - The number the user selects
  */
function inputNum(number) {
    let currentNumber = document.getElementById('calc').value;
    if ( currentNumber.indexOf('.') !== -1 ) {
        currentNumber = currentNumber + number;
        numInputs[numInputs.length - 1] = currentNumber;
    } else if ( currentNumber === '0' ) {
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

/**
  * User clicks an onscreen operator and the function below sets that to be the operator.
  * It also updates the operator if the user had already defined an operator.
  * @param {string} op - The operator that the user selects
  */
function inputOp(op) {
    const currentOp = document.getElementById('op').value;

    if ( currentOp === '' ) {
        opInputs.push(op);
    } else {
        opInputs[opInputs.length - 1] = op;
    }
    document.getElementById('op').value = op;
    clearNum();
    createHist();
}

/**
 * User clicks the onscreen minus sign and the current value is multiplied by -1.
 */
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

/**
 * When the displayed value or operator is selected the history is updated using the function below.
 * This function is displayed above the current value to show the user a history of the calculation.
 * This makes an array by alternating through two arrays (number array and operator arrays) to combine to one.
 */
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


/**
 * Priority of the calculation is determined using MDAS (*,/,+,-).
 * Using an array of operators to cycle through the equation to calculate in order (right to left).
 * Once the location is determined the calculation is preformed by the calc function.
 * The answer is then displayed.
 */
function calculate() {
    const operators = ['*', '/', '+', '-'];
    let opIndex = 0;
    while ( opInputs.length > 0 && opIndex < operators.length ) {
        const op = operators[opIndex];
        const index = opInputs.findIndex((o) => o === op);
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

/**
 * Using the location of the matching operator the two values are used to calculate.
 * The case is determined by the op. The answer is then rounded to not cause overflow due to a long decimal
 * The operator is removed from the array and the values used to calculate the result are replaced by the answer.
 * @param {number} index - location of the matching operator in the formula.
 * @param {string} op - op is the operator from calculate()
 */
function calc(index, op) {
    const val1 = numInputs[index];
    const val2 = numInputs[index + 1];
    let answer = 0;
    switch (op) {
    case '*':
        answer = Number(val1) * Number(val2);
        break;
    case '/':
        answer = Number(val1) / Number(val2);
        break;
    case '+':
        answer = Number(val1) + Number(val2);
        break;
    case '-':
        answer = Number(val1) - Number(val2);
        break;
    }
    answer = Math.round(answer * 10000000) / 10000000;
    opInputs.splice(index, 1);
    numInputs.splice(index, 2, answer);
}

/**
 * Clear any entered value or stored values for calculations. Also clear operators.
 * The only think not cleared are any previously calculated answers.
 */
function allClearCalc() {
    // clears input to 0 and clears all variables
    clearCalc();
    trashHist();
}

/**
 * Clear the current value that has been entered and the current operator entered
 */
function clearCalc() {
    clearNum();
    clearOp();
}

/**
 * Set the number input field back to 0 as default
 */
function clearNum() {
    document.getElementById('calc').value = '0';
}

/**
 * Set the operator input field back to blank as default
 */
function clearOp() {
    document.getElementById('op').value = '';
}

/**
 * Clear state for any input values or operators
 */
function trashHist() {
    numInputs = [];
    opInputs = [];
    createHist();
}

/**
 * Clear the calculated answer history
 */
function trashFullHist() {
    document.getElementById('fullHist').innerHTML = '';
}

/**
 * bring back previously calculated answer for a new calculation
 */
function oldAns() {
    numInputs = [];
    opInputs = [];
    currentNumber = document.getElementById('fullHist').innerHTML;
    document.getElementById('fullHist').value = '';
    document.getElementById('calc').value = currentNumber;
    numInputs.push(currentNumber);
    createHist();
    clearOp();
}

/**
 * Add a decimal place to the end of the current value.
 * Check to make sure that there is not already a decimal in the current value.
 * Update the history
 */
function decimal() {
    let currentNumber = document.getElementById('calc').value;
    if ( currentNumber === '0' ) {
        currentNumber = '0.';
        numInputs.push(currentNumber);
    } else if ( currentNumber.indexOf('.') === -1 ) {
        currentNumber = currentNumber + '.';
        numInputs[numInputs.length - 1] = currentNumber;
    }
    document.getElementById('calc').value = currentNumber;
    createHist();
    clearOp();
}
