    class BookList {
    constructor(root, list = []) {
        this.books = list;
        this.root = root;
        return this.books.length;
    }
    add(name, author, isbn) {
        let book = new Books(name, author, isbn);
        this.books.push(book);
        this.createUI();
        return this.books.length;
    }
    handleDelete(id) {
        let index = this.books.findIndex((book) => book.id = id);
        this.books.splice(index, 1);
        this.createUI();
        return this.books.length;
    }
    createUI() {
        this.books.forEach((book) => {
            let ui = book.createUI();
            ui.querySelector(".deleteIcon").addEventListener(`click`,
             this.handleDelete.bind(this, book.id));
            })
    }
}

class Books {
    constructor(name,author) {
        this.name = name;
        this.author = author;
        this.id = `id-${Date.now()}`;
        this.isRead= false;
    }
    createUI() {
        let root = document.querySelector(".root");
        let bookName = document.createElement("li");
        bookName.classList.add("bookName");
        bookName.innerText = this.name;
        let author = document.createElement("li");
        author.innerText = this.author;
        let isbn = document.createElement("li");
        isbn.innerText = this.author;
        let deleteIcon = document.createElement("li")
        deleteIcon.innerText = "❌";
        root.append(bookName, author, isbn, deleteIcon);
        return root;
    }
}

let firstBook = new BookList("Shout");
firstBook.add("ad", "asas", "");