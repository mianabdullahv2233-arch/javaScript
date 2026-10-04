function calculate(){
    let number1 = Number(prompt("Enter the first number you want to add"));
    let number2 = Number(prompt("Enter the second number you want to add"));
    let addition = number1 + number2;
    document.write(`Addition of two nubers: ${number1} + ${number2} = ${addition}`);
    return;
};
calculate();