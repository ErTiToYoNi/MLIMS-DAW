const resultadoTexto = document.querySelector("#resultado");
const botonMultiply = document.querySelector("#multiply");
const botonDivide= document.querySelector("#divide");

botonMultiply.onclick= multiplicar ;
botonDivide.onclick= dividir ;

function multiplicar(){
    let firstNumber = document.querySelector("#first-number").value;
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

