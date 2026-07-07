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

// Loop through each book in array and display on the page, either in a card or table. 

// Make divs in the node, then insert the books into those divs. 

function displayBooks(){
    const bookSection = document.querySelector(".books");
    bookArray.forEach((item) => {
        const bookDivision = document.createElement('div');
        bookDivision.classList.add("book-division");
        const bookItem = document.createElement('p');
        bookItem.textContent = item;
        bookSection.appendChild(bookDivision);
        bookDivision.appendChild(bookItem);
        //bookSection.appendChild(bookItem);
    });
}

displayBooks();
