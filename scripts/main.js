let addBookDialog = document.querySelector('dialog');
let addBookButton = document.querySelector('dialog + button');
let closeModalButton = document.querySelector('dialog button');

addBookButton.addEventListener("click", () => addBookDialog.showModal());
closeModalButton.addEventListener("click", () => addBookDialog.close());


let bookArray = ["The Shining", "Elegant Coffee", "The duo of duo's", "My Great Book", "Yorkies Night Out", "Haunted: Scary Edition"];

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
}

function displayBooks(){
    const bookSection = document.querySelector(".books");
    bookArray.forEach((item) => {
        const bookDivision = document.createElement('div');
        bookDivision.classList.add("book-division");
        const bookItem = document.createElement('p');
        bookItem.textContent = item;
        bookSection.appendChild(bookDivision);
        bookDivision.appendChild(bookItem);
    });
}

displayBooks();