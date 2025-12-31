// var employeeObject = {
//     name: "Ahmed",
//     Age: 24,
//     salary: 30000,
//     getSetGen: function () {
//         for (var key in this) {
//             if (typeof this[key] !== "function") {
//                 (function (prop, obj) {
//                     var data = obj[prop];

//                     Object.defineProperty(obj, `get_${key}`, {
//                         value: function () {
//                             return data;
//                         },
//                     });
//                     Object.defineProperty(obj, `set_${key}`, {
//                         value: function (value) {
//                             data = value;
//                         },
//                     });
//                 })(key, this);
//             }
//         }
//     }
// };

// employeeObject.getSetGen();

// console.log(employeeObject.get_name());
// employeeObject.set_name("Mohamed")
// console.log(employeeObject.get_name());



// var managerObject = {
//     id: 10,
//     name: "saif",
//     department: "it",
//     getSetGen: employeeObject.getSetGen
// };

// managerObject.getSetGen();

// managerObject.set_name("ali");
// managerObject.set_department("hr");

// console.log(managerObject.get_name());
// console.log(managerObject.get_department());

// //////////////////////////////////

// var user = {
//     name: "Ali",
//     age: 10
// }

// employeeObject.getSetGen.call(user);

// user.set_name("ahmed ashraf");
// console.log(user.get_name());


/***********************************************2******************************************************/

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


var book1 = new Book("El-negm", 5, "Ahmed Ashraf", 200, "kareem", 2000);
var book2 = new Book("Clean Code", 10, "Robert Martin", 450, "Ali", 20);
var book3 = new Book("JavaScript", 7, "Mohamed Salah", 300, "Sara", 220);
var book4 = new Book("Data Structures", 4, "Ahmed Hassan", 350, "Omar", 50);


var box = new Box(200, 200, 50, "cardboard");
box.addBook(book1);
box.addBook(book2);
box.addBook(book3);
box.addBook(book4);

// console.log("Before deletion:", JSON.stringify(box, null, 2));
console.log("Before deletion:", box);
console.log(box.numOfBooks());

box.delete("Clean Code")

console.log("After deletion:", box);
console.log(box.numOfBooks());