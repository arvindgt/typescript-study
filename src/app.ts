// const test = "this is test log";
// // document.write(test); // use this line if 'defer' is removed in index.html
// console.info(test);

// import Employee from "./readonly";

let sales: number = 123_456_789;

console.log(sales);

/**
 * Enum type
 */

enum Size {small = 2, medium, large };
const ss: Size = Size.medium;

console.log(`this is ss ${ss} - `, ss)
class Friuts {
    constructor(public id: number, public name: string, private type: string) {
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
