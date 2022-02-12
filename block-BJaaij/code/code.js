class Book {
    constructor(title, category, author) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = Date.now();
    }
}

class BookList {
    constructor() {
        this.booksArr = [];
        this.currIndex = 0;
    }
    addBook(books = []) {
        this.booksArr = this.booksArr.push(books);
        return this.booksArr;
    }
    getCurrentBook() {
        return this.booksArr[this.currIndex];
    }
    getNextBook() {
        this.currIndex = this.currIndex + 1
        return this.booksArr[this.currIndex + 1];
    }
    getPreviousBook() {
        this.currIndex = this.currIndex - 1
        return this.booksArr[this.currIndex - 1];
    }
    changeCurrentBook(changeIndex) {
        this.currIndex = changeIndex;
        return this.currIndex;
    }
}

let myBooks = new Book("The Compound Effect", "Self Help", "Darren Hardy");
let myBooks1 = new Book("The Compound Effects", "Self Helps", "Darren Hardys");
let myBooks2 = new Book("The Compound Effectss", "Self Helpss", "Darren Hardyss");
let myBooks3 = new Book("The Compound Effectsss", "Self Helpsss", "Darren Hardysss" );

let library = new BookList();

library.addBook([myBooks, myBooks1, myBooks2, myBooks3]);