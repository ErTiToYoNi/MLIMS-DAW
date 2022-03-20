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

function ordenarPrimeros(){
    libros.sort();
    showbooks();
}
function ordenarUltimos(){
    libros.sort()
    showbooks();
}

function compare(a, b) {
    if (a<b) {
      return -1;
    }
    if (a>b) {
      return 1;
    }
    else
    return 0;
  }

function main() {
    let divlistaLibros = document.querySelector("#listalibros");
    let divLibros = document.querySelector("#books");
    
    if (divlistaLibros == null) {

        let p = document.createElement('p');
        p.innerHTML = "Show the number of books: " + libros.length;
        divLibros.append(p);
        showbooks();
        createButtons();

        const ordenarDePrimero = document.querySelector('#ordenarPrimero');
        ordenarDePrimero.addEventListener('click',ordenarPrimeros);
        const ordenarDeUltimo = document.querySelector('#ordenarUltimo');
        ordenarDeUltimo.addEventListener('click',ordenarUltimos);
    }
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