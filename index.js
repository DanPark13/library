const myLibrary = []

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.info = function(){
        console.log(title + " by " + author + ", " + pages + " pages, not read yet.");
    }
}

// Adds Books to Global Library
function addBooktoLibrary(book){
    myLibrary.push(book);
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
