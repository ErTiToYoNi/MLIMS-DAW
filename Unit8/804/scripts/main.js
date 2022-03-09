function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
function main(){

    function generateNumbers() {
        inputFirstNumber.value = random(1, 10);
        inputSecondNumber.value = random(1, 10);    
    }

    let resultadoTexto = document.querySelector("#resultado");
    const botonMultiply = document.querySelector("#multiply");
    const botonDivide= document.querySelector("#divide");
    const botonSum= document.querySelector("#sum");
    let inputFirstNumber = document.querySelector("#first-number");
    let inputSecondNumber = document.querySelector("#second-number");
    
    botonMultiply.addEventListener('click',multiplicar);
    botonDivide.addEventListener('click',dividir);
    botonSum.addEventListener('click',suma);

    generateNumbers();

    let ul= document.createElement("ul");
    operations.after(ul);
    
    function multiplicar(){
        let firstNumber = document.querySelector("#first-number").value;
        let secondNumber = document.querySelector("#second-number").value;
        firstNumber = parseInt(inputFirstNumber.value , 10);
        secondNumber = parseInt(inputSecondNumber.value, 10);
        resultadoTexto.textContent = firstNumber * secondNumber;
        let listItem=document.createElement('li');
        listItem.innerHTML = `${firstNumber}*${secondNumber}=${resultadoTexto.textContent}`;
        ul.append(listItem);
    }
    
    function dividir(){
        let firstNumber = document.querySelector("#first-number").value;
        let secondNumber = document.querySelector("#second-number").value;
    
        if(comprobar(secondNumber)===false){
            resultadoTexto.textContent= "Error!";
        }
        else{
        parseFloat(resultadoTexto.textContent = firstNumber / secondNumber).toFixed(2);
        }
        let listItem=document.createElement('li');
        listItem.innerHTML = `${firstNumber}/${secondNumber}=${resultadoTexto.textContent}`;
        ul.append(listItem);
    }
    
    function suma(){
        let firstNumber = document.querySelector("#first-number").value;
        let secondNumber = document.querySelector("#second-number").value;
        firstNumber = parseInt(firstNumber, 10);
        secondNumber = parseInt(secondNumber, 10);
        resultadoTexto.textContent = firstNumber + secondNumber;
        let listItem=document.createElement('li');
        listItem.innerHTML = `${firstNumber}+${secondNumber}=${resultadoTexto.textContent}`;
        ul.append(listItem);
    }
    
    function comprobar(secondNumber){
        if(secondNumber===0)
            return false;
    }

    let buttons = document.querySelectorAll('button');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', generateNumbers);
    }
    }
    document.addEventListener("DOMContentLoaded", main);