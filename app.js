// const test = "this is test log";
// // document.write(test); // use this line if 'defer' is removed in index.html
// console.info(test);
var Friuts = /** @class */ (function () {
    function Friuts(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
        console.log("I am eating ".concat(id, " ").concat(name, " in Constructor which is ").concat(type, " food"));
    }
    return Friuts;
}());
var firstFruite = new Friuts(1, 'Banana', 'healthy');
var secondFruite = new Friuts(4, 'Apple', 'more healthy');
