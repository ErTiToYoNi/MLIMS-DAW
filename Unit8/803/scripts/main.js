function main(){
const resultadoTexto = document.querySelector("#resultado");
const botonMultiply = document.querySelector("#multiply");
const botonDivide= document.querySelector("#divide");
const botonSum= document.querySelector("#sum");

botonMultiply.addEventListener('click',multiplicar);
botonDivide.addEventListener('click',dividir);
botonSum.addEventListener('click',suma);

function multiplicar(){
    let firstNumber = document.querySelector("#first-number").value;
    let secondNumber = document.querySelector("#second-number").value;
    firstNumber = parseInt(firstNumber, 10);
    secondNumber = parseInt(secondNumber, 10);
    resultadoTexto.textContent = firstNumber * secondNumber;
    let dentro = firstNumber+"*"+secondNumber+"="+ resultadoTexto.textContent;
    lista.append(document.createElement('li'));
    let li = document.querySelector("li");
    li.insertAdjacentText('afterbegin',dentro);
}

function dividir(){
    let firstNumber = document.querySelector("#first-number").value;
    let secondNumber = document.querySelector("#second-number").value;
    firstNumber = parseInt(firstNumber, 10);
    secondNumber = parseInt(secondNumber, 10);
    resultadoTexto.textContent = firstNumber / secondNumber;
    let dentro = firstNumber+"/"+secondNumber+"="+ resultadoTexto.textContent;
    lista.append(document.createElement('li'));
    let li = document.querySelector("li");
    li.insertAdjacentText('afterbegin',dentro);
}

function suma(){
    let firstNumber = document.querySelector("#first-number").value;
    let secondNumber = document.querySelector("#second-number").value;
    firstNumber = parseInt(firstNumber, 10);
    secondNumber = parseInt(secondNumber, 10);
    resultadoTexto.textContent = firstNumber + secondNumber;
    let dentro = firstNumber+"+"+secondNumber+"="+ resultadoTexto.textContent;
    lista.append(document.createElement('li'));
    let li = document.querySelector("li");
    li.insertAdjacentText('afterbegin',resultadoTexto);
}
}
document.addEventListener("DOMContentLoaded", main);