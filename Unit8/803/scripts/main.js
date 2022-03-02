const resultadoTexto = document.querySelector("#resultado");
const botonMultiply = document.querySelector("#multiply");
const botonDivide= document.querySelector("#divide");
const botonSum= document.querySelector("#sum");

botonMultiply.addEventListener('click',multiplicar);
botonDivide.addEventListener('click',dividir);
botonSum.addEventListener('click',suma);

function multiplicar(){
    
    let firstNumber = inputPrimerNumero;
    let secondNumber = document.querySelector("#second-number").value;
    firstNumber = parseInt(firstNumber, 10);
    secondNumber = parseInt(secondNumber, 10);
    resultadoTexto.textContent = firstNumber * secondNumber;
}

function dividir(){
    let firstNumber = document.querySelector("#first-number").value;
    let secondNumber = document.querySelector("#second-number").value;
    firstNumber = parseInt(firstNumber, 10);
    secondNumber = parseInt(secondNumber, 10);
    resultadoTexto.textContent = firstNumber / secondNumber;
}

function suma(){
    var firstNumber = inputPrimerNumero;
    var secondNumber= inputSegundoNumero;
    resultadoTexto.textContent = firstNumber + secondNumber;
}

function inputPrimerNumero(){
    let firstNumber = document.querySelector("#first-number").value;
    firstNumber = parseInt(firstNumber, 10);
    return firstNumber;
}

function inputSegundoNumero(){
    let secondNumber = document.querySelector("#second-number").value;
    secondNumber = parseInt(firstNumber, 10);
    return secondNumber;
}
