

function main(){
    
    let divInfo = document.querySelector("#info");  
    let quest1 = document.createElement('p');
    let quest2 = document.createElement('p');
    let article = document.querySelector("#article");
    let parrafos =document.querySelectorAll('p');
    
    quest1.innerHTML= `The number of paragraphs on the page: ${parrafos.length}`;
    console.log();
    divInfo.append(quest1);

    quest2.innerHTML= `The text of the second paragraph: ${parrafos.length}`;
    console.log();
    divInfo.append(quest1);
    
}

document.addEventListener("DOMContentLoaded", main);
