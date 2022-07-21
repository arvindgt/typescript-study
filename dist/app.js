"use strict";
// const test = "this is test log";
// // document.write(test); // use this line if 'defer' is removed in index.html
// console.info(test);
// import Employee from "./readonly";
let sales = 123456789;
console.log(sales);
/**
 * Enum type
 */
var Size;
(function (Size) {
    Size[Size["small"] = 2] = "small";
    Size[Size["medium"] = 3] = "medium";
    Size[Size["large"] = 4] = "large";
})(Size || (Size = {}));
;
const ss = Size.medium;
console.log(`this is ss ${ss} - `, ss);
class Friuts {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
        console.log(`I am eating ${id} ${name} in Constructor which is ${type} food !!`);
    }
}
const firstFruite = new Friuts(1, 'Banana', 'healthy');
const secondFruite = new Friuts(4, 'Apple', 'more healthy');
/**
 * for 'readonly test
 */
// const empDetails = new Employee(1, 'Arvind Kushwaha');
// empDetails.name = 'Arvind2';
// console.log(empDetails.getEmployee());
// empDetails.alterEmployee(1, 'Arvind3');
// console.log(empDetails.getEmployee());
