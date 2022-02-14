let form = document.querySelector(".form");
let root = document.querySelector(".book_list");

let nameElm = form.elements.bookName;
let authorElm = form.elements.author;
let imgElm = form.elements.img;

class Book {
    constructor(name, author, img) {
        this.name = name;
        this.author = author;
        this.img = img;
        this.isRead = false;
    }
    togggleIsRead() {
        this.isRead = !this.isRead;
    }
}

class BookList {
    constructor(books = []) {
        this.books = books;
    }
    addBook(name, author, img) {
        let book = new Book(name, author, img);
        this.books.push(book);
        this.createUI();
    }
    // handledelete(event) {

    // }
    createUI() {
        root.innerHTML = '';
        this.books.forEach((book, index) => {
            let img = document.createElement("img");
            img.classList.add("full")
            img.src = book.img;
            let li = document.createElement("li");
            li.classList.add("flex-33")
            let h2 = document.createElement("h2");
            h2.innerText = book.name;
            let p = document.createElement("p");
            p.innerText = book.author;
            let button = document.createElement("button");
            button.classList.add("btn");
            button.innerText = book.isRead ? "Completed" :  "Mark as Read";
            button.addEventListener(`click`, ()=> {
                book.togggleIsRead();
                this.createUI();
            })
            let remove = document.createElement("button");
            remove.classList.add("remove-btn");
            remove.innerText = "Remove Book";
            remove.addEventListener(`click`, (event) => {
                let id = event.target.dataset.id;
                this.books.splice(id, 1);
                this.createUI();
            });
            remove.setAttribute("data-id", index)
            li.append(img, h2, p,  button, remove);
            root.append(li);
        })
    }
}

let library = new BookList();


function handleSubmit(event) {
    event.preventDefault();
    let name = nameElm.value;
    let author = authorElm.value;
    let img = imgElm.value;
    library.addBook(name, author, img);
    nameElm.value = ``;
    authorElm.value = ``;
    imgElm.value = ``;
}

form.addEventListener(`submit`, handleSubmit);
