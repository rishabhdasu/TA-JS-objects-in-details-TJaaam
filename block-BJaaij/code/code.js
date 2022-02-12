class Book {
    constructor(title, category, author, isRead = false, finishedDate) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead() {
        this.isRead = !(this.isRead);
        this.finishedDate = Date.now(this.finishedDate);
        return this.isRead;
    }
}

class BookList {
    constructor(booksArr, currIndex) {
        this.booksArr = booksArr;
        this.currIndex = currIndex;
    }
    addBook(books) {
        this.booksArr = this.booksArr.push(books);
        return this.booksArr;
    }
    getCurrentBook() {
        return this.booksArr[this.currIndex];
    }
    getNextBook() {
        return this.booksArr[this.currIndex + 1];
    }
    getPreviousBook() {
        return this.booksArr[this.currIndex - 1];
    }
    changeCurrentBook(changeIndex) {
        this.currIndex = changeIndex;
    }
}

let myBooks = new Book("The Compound Effect", "Self Help", "Darren Hardy", true, "20" );
let myBooks1 = new Book("The Compound Effects", "Self Helps", "Darren Hardys", false, "21" );
let myBooks2 = new Book("The Compound Effectss", "Self Helpss", "Darren Hardyss", true, "222" );
let myBooks3 = new Book("The Compound Effectsss", "Self Helpsss", "Darren Hardysss", false, "23" );