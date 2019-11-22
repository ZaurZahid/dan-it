function count(firstNumber, secondNumber, operation) {
    if (operation == "+") {
        return firstNumber + secondNumber;
    } else if (operation == "-") {
        return firstNumber - secondNumber;
    } else if (operation == "*") {
        return firstNumber * secondNumber;
    } else if (operation == "/") {
        return firstNumber / secondNumber;
    }
}

let firstNumber;
let secondNumber;
let placeholderForFirst = "";
let placeholderForSecond = ""
while (!firstNumber && !secondNumber) {
    let inputNum = prompt("enter your first number", placeholderForFirst);
    let inputNum2 = prompt("enter your second number", placeholderForSecond);
    placeholderForFirst = inputNum; // girdiyimizi yaddasda saxlayir while tezeden donende  gelir gorurki eccel bunu girib
    placeholderForSecond = inputNum2;
    if (+inputNum && +inputNum2) {
        let operation = prompt("enter your operation");
        if (operation == "+" || operation == "-" || operation == "*" || operation == "/") {
            firstNumber = Number(inputNum);
            secondNumber = Number(inputNum2);
            alert(count(firstNumber, secondNumber, operation))
        } else {
            alert("operation isnt right")
        }
    } else {
        alert('You cant use except int');
    }
}