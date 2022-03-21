let harryPotter = {
    title: 'Harry Potter 1',
    autor: 'JK Rowling',
    publishedIn: 1997,
    alredyRead: true,
};
let harryPotter2 = {
    title: 'Harry Potter 2',
    autor: 'JK Rowling',
    publishedIn: 1998,
    alredyRead: false,
};
let harryPotter3 = {
    title: 'Harry Potter 3',
    autor: 'JK Rowling',
    publishedIn: 1999,
    alredyRead: false,
};


let libros = [harryPotter, harryPotter2, harryPotter3];

// Fuction for show the books in list
function showbooks(){
let divLibros = document.querySelector("#books");
   let ul = document.createElement('ul');

   for(let i =0; i<libros.length;i++){
        let li = document.createElement('li');
        li.innerHTML=(libros[i].title);
        divLibros.append(ul);
        ul.append(li);
   }
}
//Fuction for create buttons and add in html
function createButtons(){

    let divLibros = document.querySelector("#books");
    let buttonOrdenateCreateFirst = document.createElement('button');
    buttonOrdenateCreateFirst.setAttribute("id","ordenarPrimero");
    buttonOrdenateCreateFirst.innerHTML="Ordenar de primero a ultimo";
    divLibros.append(buttonOrdenateCreateFirst);

    let buttonOrdenateCreateLast = document.createElement('button');
    buttonOrdenateCreateLast.setAttribute("id","ordenarUltimo");
    buttonOrdenateCreateLast.innerHTML="Ordenar de ultimo a primero";
    divLibros.append(buttonOrdenateCreateLast);

    let buttonOrdenateAlfabetic = document.createElement('button');
    buttonOrdenateAlfabetic.setAttribute("id","ordenarAlfabeticamente");
    buttonOrdenateAlfabetic.innerHTML="Ordenar por alfabeto";
    divLibros.append(buttonOrdenateAlfabetic);
}

//Fuction to ordenate alfabetic Array 
function ordenarAlfabeticamenteAll(){
    libros.sort(function (a,b){return (a.title).localeCompare(b.title)});
    let ul = document.querySelector("ul");
    ulParent = ul.parentNode;
    ulParent.removeChild(ul);
    showbooks();
}
//Fuction to ordenate reverse alfabetic Array 
function ordenarAlfabeticamenteAlreves(){
    libros.sort(function (a,b){return (a.title).localeCompare(b.title)*(-1)});
}
//Fuction to order as entered in Array 
function ordenarPrimeros(){
    libros.sort();
    let ul = document.querySelector("ul");
    ulParent = ul.parentNode;
    ulParent.removeChild(ul);
    showbooks();
}
//Fuction to reverse order as entered in Array 
function ordenarUltimos(){
    libros.reverse();
    let ul = document.querySelector("ul");
    ulParent = ul.parentNode;
    ulParent.removeChild(ul);
    showbooks();
}

function main() {
    let divlistaLibros = document.querySelector("#listalibros");
    let divLibros = document.querySelector("#books");
    
    //books.html
    if (divlistaLibros == null) {

        let p = document.createElement('p');
        p.innerHTML = "Show the number of books: " + libros.length;
        divLibros.append(p);
        createButtons();
        showbooks();

        const ordenarDePrimero = document.querySelector('#ordenarPrimero');
        ordenarDePrimero.addEventListener('click',ordenarPrimeros);
        const ordenarDeUltimo = document.querySelector('#ordenarUltimo');
        ordenarDeUltimo.addEventListener('click',ordenarUltimos);
        const ordenarDeAlfabeto= document.querySelector('#ordenarAlfabeticamente');
        ordenarDeAlfabeto.addEventListener('click',ordenarAlfabeticamenteAll);
    }
    // index.html
    else {

        for (let i = 0; i < libros.length; i++) {
            let newParaph = document.createElement('p');
            if (libros[i].alredyRead === true) {
                newParaph.innerHTML = "You have read " + libros[i].title + " by " + libros[i].autor;
            }
            else
                newParaph.innerHTML = "You didn't read " + libros[i].title + " by " + libros[i].autor;
            divlistaLibros.appendChild(newParaph);
        }
    }
}
document.addEventListener("DOMContentLoaded", main);