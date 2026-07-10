let addBookDialog = document.querySelector('dialog');
let addBookButton = document.querySelector('dialog + button');
let closeModalButton = document.querySelector('dialog button');
let modalAddBook = document.querySelector('#add-book');

modalAddBook.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary("the", "the", "the", "y");
    addBookDialog.close();
    addBookDialog.classList.toggle("modal");
});

addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
    addBookDialog.classList.toggle("modal");
});

closeModalButton.addEventListener("click", () => {
    addBookDialog.close();
    addBookDialog.classList.toggle("modal")
});


let bookArray = ["The rodeo", "The happening", "Sharknado 102"];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.uuid = crypto.randomUUID();

    this.info = function() {
        console.log(`${this.title} by ${this.author} is ${this.pages} pages long. Read: ${this.read} UUID: ${this.uuid}`);
    }
}

function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    bookArray.push(book);
    displayBooks();
}

function displayBooks(){
    const bookSection = document.querySelector(".books");


    if(bookSection.childElementCount === 0){
        bookArray.forEach((item) => {
            const bookDivision = document.createElement('div');
            bookDivision.classList.add("book-division");
            const bookItem = document.createElement('p');
            bookSection.appendChild(bookDivision);
            bookDivision.appendChild(bookItem);
            bookItem.textContent = item;
        });
    } else {
        const bookDivision = document.createElement('div');
        bookDivision.classList.add("book-division");
        const bookItem = document.createElement('p');
        bookSection.appendChild(bookDivision);
        bookDivision.appendChild(bookItem);
        bookItem.textContent = bookArray.at(-1).title;
    }
    let bookCount = bookSection.childElementCount;
}

displayBooks();