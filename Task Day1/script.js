// var rectObject = {
//     width: 25,
//     hight: 30,
//     clacArea: function () {
//         return this.hight * this.width;
//     },
//     calcPerimeter: function () {
//         return 2 * (this.hight + this.width);
//     },
//     displayInfo: function () {
//         console.log(`Width = ${this.width} \nHight = ${this.hight} \nArea = ${this.clacArea()} \nPerimeter = ${this.calcPerimeter()}`);

//     }
// }

// console.log(rectObject.clacArea());
// console.log(rectObject.calcPerimeter());
// rectObject.displayInfo();


/*---------------------------------------------------2-------------------------------------------------*/
var employeeObject = {
    name: "Ahmed",
    Age: 24,
    salary: 30000,
    getSetGen: function () {
        for (var key in this) {
            if (typeof this[key] !== "function") {
                (function (prop, obj) {
                    var data = obj[prop];

                    Object.defineProperty(obj, `get_${key}`, {
                        value: function () {
                            return data;
                        },
                    });
                    Object.defineProperty(obj, `set_${key}`, {
                        value: function (value) {
                            data = value;
                        },
                    });
                })(key, this);
            }
        }
    }
};

employeeObject.getSetGen();

console.log(employeeObject.get_name());
employeeObject.set_name("Mohamed")
console.log(employeeObject.get_name());



var managerObject = {
    id: 10,
    name: "saif",
    department: "it",
    getSetGen: employeeObject.getSetGen
};

managerObject.getSetGen();

console.log(managerObject.get_name());
console.log(managerObject.get_department());

managerObject.set_name("ali");
managerObject.set_department("hr");

console.log(managerObject.get_name());
console.log(managerObject.get_department());
