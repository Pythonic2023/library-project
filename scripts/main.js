function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        console.log(`${title} by ${author} is ${pages} pages long. Read: ${read}`);
    }
}

let bookOne = new Book("Danger Things", "The fluffer brothers", "548", "No");

bookOne.info();