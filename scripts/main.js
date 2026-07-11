let addBookDialog = document.querySelector('dialog');
let addBookButton = document.querySelector('dialog + button');
let closeModalButton = document.querySelector('dialog button');
let modalAddBook = document.querySelector('#add-book');
let modalForm = document.getElementById('modal-form');

modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(modalForm);
    let formObject = Object.fromEntries(formData.entries());
    addBookDialog.close();
    addBookDialog.classList.toggle("modal");
    addBookToLibrary(...Object.values(formObject));
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