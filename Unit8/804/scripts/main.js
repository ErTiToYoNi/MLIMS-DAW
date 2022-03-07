function main(){
    const resultadoTexto = document.querySelector("#resultado");
    const botonMultiply = document.querySelector("#multiply");
    const botonDivide= document.querySelector("#divide");
    const botonSum= document.querySelector("#sum");
    
    
    botonMultiply.addEventListener('click',multiplicar);
    botonDivide.addEventListener('click',dividir);
    botonSum.addEventListener('click',suma);
    
    let ul= document.createElement("ul");
    operations.after(ul);
    
    function multiplicar(){
        let firstNumber = document.querySelector("#first-number").value;
        let secondNumber = document.querySelector("#second-number").value;
        firstNumber = parseInt(firstNumber, 10);
        secondNumber = parseInt(secondNumber, 10);
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
    }
    document.addEventListener("DOMContentLoaded", main);