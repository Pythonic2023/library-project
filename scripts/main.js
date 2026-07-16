let addBookDialog = document.querySelector('dialog');
let addBookButton = document.querySelector('dialog + button');
let closeModalButton = document.querySelector('dialog button');
let modalAddBook = document.querySelector('#add-book');
let modalForm = document.getElementById('modal-form');

document.body.addEventListener('click', (e) => {
    if(e.target && e.target.matches('.delete-book')) {
        const result = bookArray.findIndex(book => book.uuid === e.target.dataset.uuid);
        deleteBook(result);
    }

    if(e.target && e.target.matches('.read-status')){
        const index = bookArray.findIndex(book => book.uuid === e.target.dataset.uuid);
        bookArray.at(index).changeStatus();
        displayBooks();
    }
});

modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let submitterButtonId = e.submitter.id;
    if(submitterButtonId != "cancel-add-book"){
        let formData = new FormData(modalForm);
        let formObject = Object.fromEntries(formData.entries());
        addBookDialog.close();
        addBookDialog.classList.toggle("modal");
        addBookToLibrary(...Object.values(formObject));
    } else {
        addBookDialog.close();
        addBookDialog.classList.toggle("modal");
    }
});


addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
    addBookDialog.classList.toggle("modal");
});

closeModalButton.addEventListener("click", () => {
    addBookDialog.close();
});

let bookArray = [];

function deleteBook(result){
    if(result != -1){
        bookArray.splice(result, 1);
        displayBooks();
    }
}

const bookPrototype = {
    changeStatus() {
        this.read = this.read === "no" ? "yes" : "no";
    },
}

function addBookToLibrary(title, author, pages, read){
    let book = Object.create(bookPrototype);
    Object.assign(book, {title, author, pages, read, uuid: crypto.randomUUID()});
    bookArray.push(book);
    displayBooks();
}

function displayBooks(){
    const bookSection = document.querySelector(".books");
    bookSection.replaceChildren();
    bookArray.forEach((item) => {
        const bookDivision = document.createElement('div');
        bookDivision.classList.add(item.uuid);
        bookDivision.classList.add("book-division");

        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookRead = document.createElement('p');
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add("book-division-buttons");

        const changeReadStatus = document.createElement('button');
        changeReadStatus.classList.add("read-status");
        changeReadStatus.textContent = "Read Status";
        changeReadStatus.dataset.uuid = item.uuid;

        const deleteBookButton = document.createElement('button');
        deleteBookButton.classList.add("delete-book");
        deleteBookButton.dataset.uuid = item.uuid;
        deleteBookButton.type = "button";
        deleteBookButton.textContent = "Delete Book";

        bookSection.appendChild(bookDivision);
        bookDivision.appendChild(bookTitle);
        bookDivision.appendChild(bookAuthor);
        bookDivision.appendChild(bookPages);
        bookDivision.appendChild(bookRead);
        bookDivision.appendChild(buttonDiv);
        buttonDiv.appendChild(deleteBookButton);
        buttonDiv.appendChild(changeReadStatus);
        
        bookTitle.textContent = `Title: ${item.title}`;
        bookAuthor.textContent = `Author: ${item.author}`;
        bookPages.textContent = ` Pages: ${item.pages}`;
        bookRead.textContent = `Read: ${item.read}`; 
    });
}

displayBooks();