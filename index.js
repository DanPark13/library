const myLibrary = []

class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    info() {
        console.log(title + " by " + author + ", " + pages + " pages, not read yet.");
    }
}

// Prints all the books in the library
function allBooks(library){
    library.forEach(book => {
        console.log(book);
    });
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295")
theHobbit.info()

addBooktoLibrary(theHobbit)

allBooks(myLibrary)

document.getElementById('showDialogButton').addEventListener('click', () => {
    document.getElementById('bookDialog').showModal();
});

document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    const newBook = new Book(title, author, pages)

    addBooktoLibrary(newBook);
    
    document.getElementById('bookDialog').close();
});

function addBooktoLibrary(book) {
    const tableBody = document.getElementById('bookTableBody');

    const newRow = tableBody.insertRow();

    newRow.insertCell(0).innerText = book.title;
    newRow.insertCell(1).innerText = book.author;
    newRow.insertCell(2).innerText = book.pages;
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        tableBody.removeChild(newRow);
    };

    newRow.insertCell(3).appendChild(deleteButton);
}