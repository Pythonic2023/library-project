let bookArray = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.uuid = crypto.randomUUID();

    this.info = function() {
        console.log(`${title} by ${author} is ${pages} pages long. Read: ${read} UUID: ${this.uuid}`);
    }
}

function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    bookArray.push(book);
}