class Employee {
    constructor(private readonly id: number, public name: string) {
        console.info(`Employee ${id} name is - ${name}`);
    }

    alterEmployee(id: number, name: string): void {
        // this.id = id; // it throws error
        this.name = name;
    }

    getEmployee(): string {
        return `Employee ${this.id} is ${this.name}`;
    }
}

const empDetails = new Employee(1, 'Arvind Kushwaha');

empDetails.name = 'Arvind2';
console.log(empDetails.getEmployee());

empDetails.alterEmployee(1, 'Arvind3');
console.log(empDetails.getEmployee());


// export default Employee;