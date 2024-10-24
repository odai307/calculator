const buttons = document.querySelectorAll("button");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector(".delete");
const equalsButton = document.querySelector(".equal");
const previousOperandTextElement = document.querySelector(".previous-operand");
const currentOperandTextElement = document.querySelector(".current-operand");
let previousOperand = "";
let currentOperand = "";
let operand = "";


const updateDisplay = () => {
    previousOperandTextElement.textContent = previousOperand;
    currentOperandTextElement.textContent = currentOperand;
}

const appendNumber = (number) => {
    if (number === "." && currentOperand.includes(".")) return;
    currentOperand += number.toString();
    updateDisplay();
}

const del = () => {
    currentOperand = currentOperand.slice(0, currentOperand.length -1);
    updateDisplay();
}

const clear = () => {
    currentOperand = "";
    previousOperand = "";
    operand = "";
    updateDisplay();
}

const chooseOperation = (operation) => {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
        compute();
    }
    operand = operation;
    previousOperand = currentOperand;
    currentOperand = "";
    updateDisplay();
}

const compute = () => {
    let prev = parseFloat(previousOperand);
    let curr = parseFloat(currentOperand);
    let result;

    if (isNaN(prev) || isNaN(curr)) return;

    switch(operand) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "÷":
            if (curr === 0) {
                alert("Cannot be divided by 0");
                return;
            }
            result = prev / curr;
            break;
        case "mod":
            result = prev % curr;
            break;
        default:
            return;
    }

    currentOperand = result;
    operand = undefined;
    previousOperand = ""
    updateDisplay();
}

buttons.forEach((button) => {
    button.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = e.target.id !== "clear" ? "wheat" : "rgba(147, 165, 42, 0.432)";
    });

    button.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = "";
    });

    button.addEventListener("mousedown", (e) => {
        e.target.style.backgroundColor = "burlywood";
    });

    button.addEventListener("mouseup", (e) => {
        e.target.style.backgroundColor = e.target.id !== "clear" ? "wheat" : "rgba(147, 165, 42, 0.432)";
    });
})


numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        appendNumber(button.textContent);
    });
})

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        chooseOperation(button.textContent);
    })
})

deleteButton.addEventListener("click", del);

clearButton.addEventListener("click", clear);

equalsButton.addEventListener("click", compute);

document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key)) { 
        appendNumber(e.key);
    } else if (["+", "-", "*", "÷"].includes(e.key)) {
        chooseOperation(e.key);
    } else if (e.key === "Enter") {
        compute();
    } else if (e.key === "Backspace") {
        del();
    } else if (e.key === "Escape") {
        clear();
    }
});


