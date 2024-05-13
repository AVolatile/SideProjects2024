// Initialize display value and current operator
let displayValue = '';
let currentOperator = '';

// Function to append value to the display
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

// Function to perform arithmetic operations
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error('Division by zero');
            }
            return num1 / num2;
        default:
            throw new Error('Invalid operator');
    }
}

// Function to calculate the result
function calculate() {
    try {
        // Split display value into operands based on current operator
        let operands = displayValue.split(currentOperator);
        // Check if there are exactly two operands
        if (operands.length !== 2) {
            throw new Error('Invalid expression');
        }
        // Parse operands as floats
        let num1 = parseFloat(operands[0]);
        let num2 = parseFloat(operands[1]);
        // Perform operation and get result
        let result = operate(currentOperator, num1, num2);
        // Check if result is a valid number
        if (!isNaN(result)) {
            // Update display with result
            displayValue = result.toString();
            document.getElementById('display').value = displayValue;
        } else {
            throw new Error('Invalid result');
        }
    } catch (error) {
        // Alert user if any error occurs during calculation
        alert(error.message);
    }
}

// Function to set the current operator
function setOperator(operator) {
    // If an operator is already set, calculate the result first
    if (currentOperator !== '') {
        calculate();
    }
    // Set the current operator
    currentOperator = operator;
    // Append operator to the display
    appendToDisplay(operator);
}

// Function to clear the display
function clearDisplay() {
    // Reset display value and current operator
    displayValue = '';
    currentOperator = '';
    // Update display with empty value
    document.getElementById('display').value = displayValue;
}
