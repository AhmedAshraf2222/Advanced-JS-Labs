function Shape(w, h) {
    if (this.constructor == Shape)
        throw "Cannot create instance of abstract class Shape"
    this.width = w;
    this.height = h;
}

Shape.prototype.getArea = function () {
    throw "Abstract method 'area' must be implemented"
}
Shape.prototype.getPerimeter = function () {
    throw "Abstract method 'Perimeter' must be implemented"
}

//////////////////////
//////////////////////rect
function Rectangle(width, height) {
    if (this.constructor === Rectangle && Rectangle.instance) {
        throw "Only one Rectangle instance allowed";
    }
    Shape.call(this, width, height);
    Rectangle.instance = this;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
}
Rectangle.prototype.getPerimeter = function () {
    return (this.width + this.height) * 2;
}
var rect = new Rectangle(10, 20);
console.log(rect);
console.log(rect.getArea());
console.log(rect.getPerimeter());

//////////////////////
//////////////////////square
function Square(width, height) {
    if (Square.instance) {
        throw "Only one instance allowed";
    }
    Rectangle.call(this, width, height)
    Square.instance = this;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.getArea = function () {
    return this.width * this.height;
}
Square.prototype.getPerimeter = function () {
    return (this.width + this.height) * 2;
}
var square = new Square(5, 5);
console.log(square);
console.log(square.getArea());
console.log(square.getPerimeter());
