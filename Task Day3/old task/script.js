function Book(title, numofChapters, author, numofPages, publisher, numofCopies) {
    this.title = title;
    this.numofChapters = numofChapters;
    this.author = author;
    this.numofPages = numofPages;
    this.publisher = publisher;
    this.numofCopies = numofCopies;
};

function Box(height, width, length, material) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.volume = height * width * length;
    this.material = material;
    this.content = [];
};
Box.prototype.addBook = function (book) {
    if (!(book instanceof Book)) {
        console.log("Error: This is not a Book object");
        return;
    }
    this.content.push(book);
}

Box.prototype.numOfBooks = function () {
    return this.content.length;
};

Box.prototype.delete = function (name) {
    for (var i = 0; i < this.content.length; i++) {
        if (this.content[i].title == name) {
            this.content.splice(i, 1);
        }
    }
};

Box.prototype.toString = function () {
    return `BOX Details: \nBox hight = ${this.height},\nBox width = ${this.width},\nBox length = ${this.length} `;
}
Box.prototype.valueOf = function () {
    return this.numOfBooks();
}


var book1 = new Book("El-negm", 5, "Ahmed Ashraf", 200, "kareem", 2000);
var book2 = new Book("Clean Code", 10, "Robert Martin", 450, "Ali", 20);
var book3 = new Book("JavaScript", 7, "Mohamed Salah", 300, "Sara", 220);
var book4 = new Book("Data Structures", 4, "Ahmed Hassan", 350, "Omar", 50);


var box = new Box(200, 300, 50, "cardboard");
box.addBook(book1);
box.addBook(book2);
box.addBook(book3);
box.addBook(book4);


console.log("Before deletion:", box.content);
console.log(box.numOfBooks());

box.delete("Clean Code")

console.log("After deletion:", box);
console.log(box.numOfBooks());

console.log(box.toString());

var box2 = new Box(100, 150, 50, "cardboard");
box2.addBook(book1);
box2.addBook(book2);
console.log("Number of books = ", box + box2);
