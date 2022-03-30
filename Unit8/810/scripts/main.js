
let harryPotter = {
    title: 'Harry Potter 1',
    author: 'JK Rowling',
    publishedIn: 1997,
    alreadyRead: true,
    cover: 'harrypotter1.jpg',
};
let harryPotter2 = {
    title: 'Harry Potter 2',
    author: 'JK Rowling',
    publishedIn: 1998,
    alreadyRead: false,
    cover: 'harrypotter2.jpg',
};
let harryPotter3 = {
    title: 'Harry Potter 3',
    author: 'JK Rowling',
    publishedIn: 1999,
    alreadyRead: false,
    cover: 'harrypotter3.jpg',
};


let books = [harryPotter, harryPotter2, harryPotter3];

let json = JSON.stringify(books);
localStorage.setItem('books',json);

