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


let bookArray = [{title: "The one", author: "Yes", pages: "200", read: "y", uuid: "53"}, {title: "The Shining", author: "Tolstien", pages: "200", read: "y", uuid: "54"}, {title: "Sharknado", author: "Yes", pages: "200", read: "y", uuid: "55"}];

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
    bookSection.replaceChildren();
    bookArray.forEach((item) => {
        const bookDivision = document.createElement('div');
        bookDivision.id = item.uuid;
        bookDivision.classList.add("book-division");
        const bookItem = document.createElement('p');
        const deleteBookButton = document.createElement('button');
        deleteBookButton.classList.add("delete-book");
        deleteBookButton.type = "button";
        deleteBookButton.textContent = "Delete Book";
        bookSection.appendChild(bookDivision);
        bookDivision.appendChild(bookItem);
        bookDivision.appendChild(deleteBookButton);
        bookItem.textContent = item.title;
    });
}

displayBooks();