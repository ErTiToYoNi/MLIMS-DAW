function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
function main(){


    let seleccion = document.querySelector("#seleccion");
    generateNumbers();

    let labelOfNumbers = document.createElement("label");
    seleccion.append(labelOfNumbers);

    let numberOfNumbers = document.createElement("input");
    labelOfNumbers.appendChild(numberOfNumbers);
    numberOfNumbers.setAttribute("type","number");
    numberOfNumbers.setAttribute("id","numbersGenerator");

    let buttonNumbersGenerator= document.createElement("button");

    labelOfNumbers.appendChild(buttonNumbersGenerator);
    buttonNumbersGenerator.textContent= "Generate";
    buttonNumbersGenerator.addEventListener('click',generateRandomNumbers);

    let ul= document.createElement("ul");
    seleccion.append(ul);

    const selectAllcheckbox = document.createElement("button");
    seleccion.appendChild(selectAllcheckbox);
    selectAllcheckbox.textContent= "Select All";

    const desSelectAllcheckbox = document.createElement("button");
    seleccion.appendChild(desSelectAllcheckbox);
    desSelectAllcheckbox.textContent= "Deselect all";


    function generateNumbers() {
        numeroRandom = random(1, 10);
        return numeroRandom;
    }
    

    function generateRandomNumbers(){
        generateInputs(document.querySelector("#numbersGenerator").value);
    }

    function generateInputs(numberInputs){
        for(var i= 0; i<numberInputs;i++){

            let numero = generateNumbers();
            let inputNew = document.createElement("input");
            let listItem = document.createElement('li');
            let labelNew= document.createElement("label");

            labelNew.setAttribute("for",numero);
            inputNew.setAttribute("type","checkbox");
            inputNew.setAttribute("name","checkboxes");
            inputNew.setAttribute("id","checkboxes"+i);
            inputNew.setAttribute("value",numero);

            ul.appendChild(listItem);
            listItem.appendChild(inputNew);
            listItem.appendChild(labelNew);
            labelNew.textContent =  numero;
        }
    }

    function selecionarTodo(){
        let numerosListas = document.querySelectorAll('input[type="checkbox"]');
        for( var i=0; i<10;i++){
            numerosListas[i].checked=true;
        }
    }

    function desSelecionarTodo(){
        let numerosListas = document.querySelectorAll('input[type="checkbox"]');
        for( var i=0; i<10;i++){
            numerosListas[i].checked=false;
        }
    }
    desSelectAllcheckbox.addEventListener("click",desSelecionarTodo);
    selectAllcheckbox.addEventListener("click",selecionarTodo);

}
    document.addEventListener("DOMContentLoaded", main);