function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
function main(){

    function generateNumbers() {
        numeroRandom = random(1, 10);
        return numeroRandom;
    }

    let seleccion = document.querySelector("#seleccion");
    generateNumbers();

    let ul= document.createElement("ul");
    seleccion.append(ul);
    let numeroLista=[10];

    const selectAllcheckbox = document.createElement("button");
    seleccion.appendChild(selectAllcheckbox);
    selectAllcheckbox.textContent= "Select All";
    generateInputs(10);

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
            numeroLista[i]= inputNew;
            selectAllcheckbox.addEventListener("click",selecionarTodo());
        }
    }

    function selecionarTodo(numero){
       
        for( var i=0; i<10;i++){
             let check = document.querySelector("#checkboxes"+i);
            check ===true ;
        }
    }

    for( var i=0; i<10;i++){
        console.log(numeroLista[i]);
    }
}
    document.addEventListener("DOMContentLoaded", main);