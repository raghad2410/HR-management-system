let firstStorege = window.localStorage.getItem('Employees')
let secandStorge = JSON.parse(firstStorege)

console.log(secandStorge[0].department)
console.log(secandStorge.length)
console.log(secandStorge[0].salary)


let sumAd = 0;
let sumDev = 0;
let sumFin = 0;
let sumMar = 0;


let totalSalaryAdmin = 0;
let totalSalaryDev = 0;
let totalSalaryFin = 0;
let totalSalaryMar = 0;

// let sumDepartment = 1;
// for (let i = 0; i < secandStorge.length; i++) {
//     if (secandStorge[i].department !== secandStorge[i + 1].department) {
//         sumDepartment = sumDepartment + 1
//     } else {
//         sumDepartment = sumDepartment
//     }
// }
// console.log(sumDepartment)





for (let i = 0; i < secandStorge.length; i++) {
    if (secandStorge[i].department === 'Administration') {
        sumAd = sumAd + 1
        totalSalaryAdmin = secandStorge[i].salary + totalSalaryAdmin
    } else if (secandStorge[i].department === 'Development') {
        sumDev = sumDev + 1
        totalSalaryDev = secandStorge[i].salary + totalSalaryDev
    } else if (secandStorge[i].department === 'Finance') {
        sumFin = sumFin + 1
        totalSalaryFin = secandStorge[i].salary + totalSalaryFin
    } else if (secandStorge[i].department === 'Marketing') {
        sumMar = sumMar + 1
        totalSalaryMar = secandStorge[i].salary + totalSalaryMar
    }
}
// console.log(sumAd)
// console.log(totalSalaryAdmin)

let avgAdmin = totalSalaryAdmin / sumAd;
let avgDev = totalSalaryDev / sumDev;
let avgFin = totalSalaryFin / sumFin;
let avgMar = totalSalaryMar / sumMar;

// console.log(sumDev)
// console.log(sumFin)
// console.log(sumMar)


//to calculate the number of employee in each department
let adminn = document.getElementById('admin');
let adminnn = document.createElement('p');
adminnn.textContent = `${sumAd} Employees`;
adminn.appendChild(adminnn);

let devel = document.getElementById('devel');
let devell = document.createElement('p');
devell.textContent = `${sumDev} Employees`;
devel.appendChild(devell);

let fin = document.getElementById('fin');
let finn = document.createElement('p');
finn.textContent = `${sumFin} Employees`;
fin.appendChild(finn);


let mark = document.getElementById('mark');
let markk = document.createElement('p');
markk.textContent = `${sumMar} Employees`;
mark.appendChild(markk);


//to calculate the total salary
let adminSalary = document.getElementById('adminSalary');
let totalAdmin = document.createElement('p');
totalAdmin.textContent = `${totalSalaryAdmin} JOD`;
adminSalary.appendChild(totalAdmin);

let devSalary = document.getElementById('devSalary');
let totalDev = document.createElement('p');
totalDev.textContent = `${totalSalaryDev} JOD`;
devSalary.appendChild(totalDev);

let finSalary = document.getElementById('finSalary');
let totalFin = document.createElement('p');
totalFin.textContent = `${totalSalaryFin} JOD`;
finSalary.appendChild(totalFin);


let markSalary = document.getElementById('markSalary');
let totalMark = document.createElement('p');
totalMark.textContent = `${totalSalaryMar} JOD`;
markSalary.appendChild(totalMark);

// to claculate the total Salary For Each Departments
let totalSalaryForEachDepartments = totalSalaryMar + totalSalaryFin + totalSalaryDev + totalSalaryAdmin


//to declare the average salary for each department
let adminAvg = document.getElementById('adminAvg');
let adminAverage = document.createElement('p');
adminAverage.textContent = `${avgAdmin} JOD`;
adminAvg.appendChild(adminAverage);

let devAvg = document.getElementById('devAvg');
let devAverage = document.createElement('p');
devAverage.textContent = `${avgDev} JOD`;
devAvg.appendChild(devAverage);

let finAvg = document.getElementById('finAvg');
let finAverage = document.createElement('p');
finAverage.textContent = `${avgFin} JOD`;
finAvg.appendChild(finAverage);


let markAvg = document.getElementById('markAvg');
let markAverage = document.createElement('p');
markAverage.textContent = `${avgMar} JOD`;
markAvg.appendChild(markAverage);

// to declare the avgerage Salary For Each Departments
let avgSalaryForEachDepartment = avgMar + avgFin + avgDev + avgAdmin;



//to generate the footer
let number = document.getElementById('number');
let EmployeeTotal = document.createElement('p');
EmployeeTotal.textContent = `Total Number Of Employees = ${secandStorge.length} Employees`;
number.appendChild(EmployeeTotal);

let salaryTot = document.getElementById('total');
let salaryTotal = document.createElement('p');
salaryTotal.textContent = `Total Salary for Each Departments = ${totalSalaryForEachDepartments}`;
salaryTot.appendChild(salaryTotal);


let avgSalaryTot = document.getElementById('avgg');
let avgSalaryTotal = document.createElement('p');
avgSalaryTotal.textContent = `Total Salary for Each Departments = ${avgSalaryForEachDepartment}`;
avgSalaryTot.appendChild(avgSalaryTotal);

// let number = document.getElementById('number');
// let numEmp = document.createElement('p');
// numEmp.textContent = `${avgMar} JOD`;
// number.appendChild(numEmp);

// let total = document.getElementById('total');
// let totalSal = document.createElement('p');
// totalSal.textContent = `${avgMar} JOD`;
// total.appendChild(totalSal);

// let avgg = document.getElementById('avgg');
// let markAverage = document.createElement('p');
// markAverage.textContent = `${avgMar} JOD`;
// avgg.appendChild(markAverage);



