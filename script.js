const button = document.querySelectorAll("button"); // General button for all buttons
const previousOperandTextElement = document.querySelector(".previous-operand");
const currentOperandTextElement =  document.querySelector(".current-operand");
const numbersButton = document.querySelectorAll(".number");
const operationButton = document.querySelectorAll(".operation");
const deleteButton = document.querySelector(".delete");
const modButton = document.querySelector(".mod");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equal");


//Event Listeners For Buttons
button.forEach((btn) => {
    btn.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "beige";
    });

    btn.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = "white";
    });

    btn.addEventListener("mousedown", (e) => {
        e.target.style.backgroundColor = "burlywood";
    });

    btn.addEventListener("mouseup", (e) => {
        e.target.style.backgroundColor = "beige";
    });
})