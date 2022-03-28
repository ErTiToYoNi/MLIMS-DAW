
function main(){
    let buttonNext = document.querySelector("#buttonNext");
    let buttonPrevious = document.querySelector("#buttonPrevious");
    let titleBook = document.querySelector("#title");
    let authorBook = document.querySelector("#author");
    let imagen = document.querySelector("#cover");


    imagen.src = "covers/harrypotter1.jpg"; 
    titleBook.innerHTML = books[0].title;
    authorBook.innerHTML = books[0].author;
    let posicion = 0;

    for(let key in books){ 
        buttonNext.addEventListener('click',nextCover);
        buttonPrevious.addEventListener('click',previousCover);
    }

    function nextCover(){ 
            posicion++;
            console.log(posicion);
            if(posicion == (books.length-1)){
                buttonNext.disabled= true;
            }
            else{
                imagen.src = "covers/"+ books[posicion].cover;
                imagen.alt = books[posicion].cover;
                titleBook.innerHTML = books[posicion].title;
                authorBook.innerHTML = books[posicion].author;
            }
            if(posicion!=0){
                buttonPrevious.disabled= false;
            }
        }

    function previousCover(){
        posicion--;
        console.log(posicion);
        if(posicion == 0){
            buttonPrevious.disabled = true;
        }
        else{
        imagen.src = "covers/"+books[posicion].cover;
        titleBook.innerHTML = books[posicion].title;
        authorBook.innerHTML = books[posicion].author;
        }
        if(posicion== books.length){
            buttonNext.disabled= false;
        }
    }

}

document.addEventListener("DOMContentLoaded", main);