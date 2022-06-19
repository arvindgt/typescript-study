"use strict";
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.info(`Employee ${id} name is - ${name}`);
    }
    alterEmployee(id, name) {
        // this.id = id; // it throws error
        this.name = name;
    }
    getEmployee() {
        return `Employee ${this.id} is ${this.name}`;
    }
}
const empDetails = new Employee(1, 'Arvind Kushwaha');
empDetails.name = 'Arvind2';
console.log(empDetails.getEmployee());
empDetails.alterEmployee(1, 'Arvind3');
console.log(empDetails.getEmployee());
// export default Employee;
