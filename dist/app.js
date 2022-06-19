"use strict";
// const test = "this is test log";
// // document.write(test); // use this line if 'defer' is removed in index.html
// console.info(test);
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
