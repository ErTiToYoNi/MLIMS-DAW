function main() {

    let divLibros = document.querySelector("#libros");

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

    for (let i = 0; i < libros.length; i++) {
        let newParaph = document.createElement('p');
            if(libros[i].alredyRead===true){
                newParaph.innerHTML = "You have read "+libros[i].title +" by "+ libros[i].autor;
            }
            else
                newParaph.innerHTML = "You didn't read "+libros[i].title +" by "+ libros[i].autor;
        divLibros.appendChild(newParaph);
    }
}
document.addEventListener("DOMContentLoaded", main);