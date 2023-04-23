'use strict';



function Employee(fullName, department, level, image, employeeID) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.employeeID = employeeID;
    this.salary = this.salaryEmployee();
    Employee.arrayEmployee.push(this);
}

Employee.arrayEmployee = [];

Employee.prototype.salaryEmployee = function () {
    let level = this.level;
    let min = 0;
    let max = 0;
    if (level === "Senior") {
        min = 1500;
        max = 2000;
    } else if (level === "Mid-Senior") {
        min = 1000;
        max = 1500;
    }
    else if (level === "Junior") {
        min = 500;
        max = 1000;
    }
    let salary = Math.floor(Math.random() * (max - min + 1)) + min;
    let netSalary = salary * 0.925;
    salary = Math.floor(netSalary)
    return salary;
};



//render the data from js to html
Employee.prototype.cards = function () {
    const administrator = document.getElementById('Administration')
    const developer = document.getElementById('Development')
    const market = document.getElementById('Marketing')
    const finance = document.getElementById('Finance')



    market.innerHTML = '';
    administrator.innerHTML = '';
    developer.innerHTML = '';
    finance.innerHTML = '';


    for (let i = 0; i < Employee.arrayEmployee.length; i++) {
        const depdiv = document.createElement('div')
        depdiv.className = "divclass"

        if (Employee.arrayEmployee[i].department === "Administration") {
            administrator.appendChild(depdiv);
        } else if (Employee.arrayEmployee[i].department === "Finance") {
            finance.appendChild(depdiv)
        } else if (Employee.arrayEmployee[i].department === "Marketing") {
            market.appendChild(depdiv)
        } else if (Employee.arrayEmployee[i].department === "Development") {
            developer.appendChild(depdiv)
        }


        const imgss = document.createElement('img')
        imgss.src = Employee.arrayEmployee[i].image
        depdiv.appendChild(imgss)
        imgss.className = "imagclass"

        const nameEmp = document.createElement('p')
        nameEmp.textContent = `Name: ${Employee.arrayEmployee[i].fullName}`
        depdiv.appendChild(nameEmp)
        nameEmp.className = "paragraph"

        const theId = document.createElement('p')
        theId.textContent = `ID: ${Employee.arrayEmployee[i].employeeID}`
        depdiv.appendChild(theId)
        theId.className = "theIDD"


        const depEmplo = document.createElement('p')
        depEmplo.textContent = `Department : ${Employee.arrayEmployee[i].department}`
        depEmplo.className = "depart"
        depdiv.appendChild(depEmplo)

        const levelEmp = document.createElement('p')
        levelEmp.textContent = `Level : ${Employee.arrayEmployee[i].level} `
        levelEmp.className = "levelEmployee"
        depdiv.appendChild(levelEmp)


        const theSalaryEmp = document.createElement('p')
        theSalaryEmp.textContent = ` The Salary:${Employee.arrayEmployee[i].salary}`
        theSalaryEmp.className = "salaryy"
        depdiv.appendChild(theSalaryEmp)
    }
}


let emp1000 = new Employee("Ghazi Samer", "Administration", "Senior", "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true", 1000)
let emp1001 = new Employee('Lana Ali', 'Finance', 'Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Lana.jpg?raw=true", 1001)
let emp1002 = new Employee('Tamara Ayoub', 'Marketing', 'Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true", 1002)
let emp1003 = new Employee('Safi Walid', 'Administration', 'Mid-Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Safi.jpg?raw=true", 1003)
let emp1004 = new Employee('Omar Zaid', 'Development', 'Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Omar.jpg?raw=true", 1004)
let emp1005 = new Employee('Rana Saleh', 'Development', 'Junior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Rana.jpg?raw=true", 1005)
let emp1006 = new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true", 1006)


// function raghad(fullName, department, level) {
//     let x = new Employee(fullName, department, level)
//     return x
// }
// emp1009 = raghad("gazi", "Administration", "Senior")










Employee.prototype.random = function (heightEmpID, lowID) {
    this.employeeID = Math.floor(Math.random() * (heightEmpID - lowID + 1)) + lowID
    return this.employeeID
}




function Emplo(element) {
    element.preventDefault();

    let fullName = element.target.fullName.value;
    let department = element.target.Department.value;
    let level = element.target.Level.value;
    let image = element.target.img.value;

    const newE = new Employee(fullName, department, level, image);
    newE.random(1000, 9999)
    newE.cards()
    // console.log(newE)
    // return newE
    console.log(Employee.arrayEmployee)
    saveData();
}

gittingDataFromLocal()

let array = [emp1000, emp1001, emp1002, emp1003, emp1004, emp1005, emp1006]
for (let i = 0; i < array.length; i++) {
    //call the rendered function
    array[i].cards()
}

// Saving the data inside the LocalStorage
function saveData() {
    let data = JSON.stringify(Employee.arrayEmployee);
    localStorage.setItem('Employees', data);
}

// Gitting the data from the LocalStorage
function gittingDataFromLocal() {
    let gittingData = localStorage.getItem('Employees')
    let arrayOfData = JSON.parse(gittingData);

    Employee.arrayEmployee = [];
    for (let i = 0; i < arrayOfData.length; i++) {
        new Employee(arrayOfData[i].fullName, arrayOfData[i].department, arrayOfData[i].level, arrayOfData[i].image, arrayOfData[i].employeeID, arrayOfData[i].salary)
    }
    console.log(arrayOfData)
}


const formApply = document.getElementById('empForm')
formApply.addEventListener('submit', Emplo)
saveData()

