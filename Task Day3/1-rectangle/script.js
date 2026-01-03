
function Rectangle(width, hight) {
    this.width = width;
    this.hight = hight;
    Rectangle.counter++;
}

Rectangle.counter = 0
Rectangle.numOfObject = function () {
    return Rectangle.counter;
}

Rectangle.prototype.clacArea = function () {
    return this.hight * this.width;
}
Rectangle.prototype.calcPerimeter = function () {
    return 2 * (this.hight + this.width);
}

Rectangle.prototype.toString = function () {
    return `Width = ${this.width} \nHight = ${this.hight} \nArea = ${this.clacArea()} \nPerimeter = ${this.calcPerimeter()}`;
}

var rect = new Rectangle(5, 10)
console.log(rect.toString());

var rect = new Rectangle(5, 10)
var rect = new Rectangle(5, 10)
var rect = new Rectangle(5, 10)
var rect = new Rectangle(5, 10)
console.log("Number of objects = ", Rectangle.numOfObject());
