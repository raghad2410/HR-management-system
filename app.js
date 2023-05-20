let arr = [];

function EmployeeInformation(EmployeeID, fullName, department, level) {
    this.EmployeeID = EmployeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;

    this.salary = this.calcSalary();
    this.netSalary = Math.round(0.925 * this.salary)

    this.para = `Employee name: ${this.fullName} `;
    this.sal = `Employee salary : ${this.salary}, Employee salary with 7.5% tax : ${this.netSalary}`
    arr.push(this);
    console.log(this) //object
}
console.log(arr) //array

EmployeeInformation.prototype.calcSalary = function () {
    if (this.level === "Senior") {
        min = 1500;
        max = 2000;
        finalSalary = Math.floor(Math.random() * (max - min + 1)) + min
        return (Math.round(finalSalary));
    } else if (this.level === "Mid-Senior") {
        min = 1000;
        max = 1500;
        finalSalary = Math.floor(Math.random() * (max - min + 1)) + min
        return (Math.round(finalSalary));
    } else if (this.level === "Junior") {
        min = 500;
        max = 1000;
        finalSalary = Math.floor(Math.random() * (max - min + 1)) + min
        return (Math.round(finalSalary));
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
    newP.textContent = `${arr[i].para}`;
    const newPP = document.createElement("p");
    newPP.textContent = `${arr[i].sal}`;

    const parentPpp = document.createElement("div");
    parentPpp.appendChild(newP)
    parentPpp.appendChild(newPP)

    const parentElement = document.getElementById("list");
    parentElement.appendChild(parentPpp);
}
