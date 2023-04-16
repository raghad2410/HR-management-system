function EmployeeInformation(EmployeeID, fullName, department, level, salary) {
    this.EmployeeID = EmployeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;

    if (level === "Senior") {
        min = 1500
        max = 2000
        salary = Math.floor(Math.random() * (max - min + 1)) + min
    } else if (level === "Mid-Senior") {
        min = 1000
        max = 1500
        salary = Math.floor(Math.random() * (max - min + 1)) + min
    } else if (level === "Junior") {
        min = 500
        max = 1000
        salary = Math.floor(Math.random() * (max - min + 1)) + min
    }

    this.salary = salary;
    this.netSalary = salary * 0.925
}






const emp1000 = new EmployeeInformation(1000, "Ghazi Samer", "Administration", "Senior");
const emp1001 = new EmployeeInformation(1001, "Lana Ali", "Finance", "Senior");
const emp1002 = new EmployeeInformation(1002, "Tamara Ayoub", "Marketing", "Senior");
const emp1003 = new EmployeeInformation(1003, "Safi Walid", "Administration", "Mid-Senior");
const emp1004 = new EmployeeInformation(1004, "Omar Zaid", "Development", "Senior");
const emp1005 = new EmployeeInformation(1005, "Rana Saleh", "Development", "Junior");
const emp1006 = new EmployeeInformation(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

let arr = [emp1000, emp1001, emp1002, emp1003, emp1004, emp1005, emp1006];

for (let i = 0; i < arr.length; i++) {
    const newP = document.createElement("p");
    newP.textContent = `The Full Name is ${arr[i].fullName}, the employee ID is ${arr[i].EmployeeID}, the employee department is
    ${arr[i].department}, the level is ${arr[i].level} , and the salary withot tax is ${arr[i].salary}, and the net salary with tax is 
    ${arr[i].netSalary}`;

    const parantelemant = document.getElementById("list")
    parantelemant.appendChild(newP)
}
