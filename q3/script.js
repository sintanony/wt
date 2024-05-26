function startCalculator() {
    alert("Welcome to Basic Calculator!");

    while (true) {
        var operation = prompt("Choose operation: add, subtract, multiply, divide. Type 'exit' to quit.");

        if (operation === 'exit') {
            alert("Exiting Calculator. Thank you!");
            break;
        }

        var num1 = parseFloat(prompt("Enter first number:"));
        var num2 = parseFloat(prompt("Enter second number:"));

        if (isNaN(num1) || isNaN(num2)) {
            alert("Please enter valid numbers.");
            continue;
        }

        var result;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    alert("Cannot divide by zero.");
                    continue;
                }
                break;
            default:
                alert("Invalid operation.");
                continue;
        }

        alert("Result: " + result);
    }
}

startCalculator();
