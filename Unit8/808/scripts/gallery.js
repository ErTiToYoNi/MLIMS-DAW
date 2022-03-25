
function main(){
let buttonNext = document.querySelector("#buttonNext");
let buttonPrevious = document.querySelector("#buttonPrevious");
let titleBook = document.querySelector("#title");
let authorBook = document.querySelector("#author");
buttonNext.addEventListener('click',nextCover);
buttonPrevious.addEventListener('click',previousCover);
let imagen = document.querySelector("#cover");
let posicion = 0;
imagen.src = "covers/harrypotter1.jpg"; 
titleBook.innerHTML = books[0].title;
authorBook.innerHTML = books[0].author;
posicion = 1;

function nextCover(){
    if(posicion==1){    
        imagen.src = "covers/harrypotter2.jpg";
        titleBook.innerHTML = books[1].title;
        authorBook.innerHTML = books[1].author;
        posicion++;
    }
    else if(posicion==2){
        imagen.src = "covers/harrypotter3.jpg"; 
        titleBook.innerHTML = books[2].title;
        authorBook.innerHTML = books[2].author;
    }
}

function previousCover(){
    if(posicion==2){    
        imagen.src = "covers/harrypotter2.jpg"; 
        titleBook.innerHTML = books[1].title;
        authorBook.innerHTML = books[1].author;
        posicion--;
    }
    else if(posicion==1){
        imagen.src = "covers/harrypotter1.jpg";
        titleBook.innerHTML = books[0].title;
        authorBook.innerHTML = books[0].author;
    }
}


}

document.addEventListener("DOMContentLoaded", main);