let arr = [];

function EmployeeInformation(EmployeeID, fullName, department, level) {
    this.EmployeeID = EmployeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;

    this.salary = this.calcSalary();
    this.netSalary = 0.925 * this.salary

    this.para = `The Full Name is ${this.fullName}, the employee ID is ${this.EmployeeID}, the employee department is ${this.department},
    the level is ${this.level} and the salary is ${this.salary} and the salary with tax 7.5% will be ${this.netSalary}`;

    arr.push(this);
}

EmployeeInformation.prototype.calcSalary = function () {
    if (this.level === "Senior") {
        min = 1500;
        max = 2000;
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    } else if (this.level === "Mid-Senior") {
        min = 1000;
        max = 1500;
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    } else if (this.level === "Junior") {
        min = 500;
        max = 1000;
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    }
}

const emp1000 = new EmployeeInformation(1000, "Ghazi Samer", "Administration", "Senior");
const emp1001 = new EmployeeInformation(1001, "Lana Ali", "Finance", "Senior");
const emp1002 = new EmployeeInformation(1002, "Tamara Ayoub", "Marketing", "Senior");
const emp1003 = new EmployeeInformation(1003, "Safi Walid", "Administration", "Mid-Senior");
const emp1004 = new EmployeeInformation(1004, "Omar Zaid", "Development", "Senior");
const emp1005 = new EmployeeInformation(1005, "Rana Saleh", "Development", "Junior");
const emp1006 = new EmployeeInformation(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

for (let i = 0; i < arr.length; i++) {
    const newP = document.createElement("p");
    newP.textContent = arr[i].para;
    const parentElement = document.getElementById("list");
    parentElement.appendChild(newP);
}
