'use strict';

const formatSalary = (salary) => {
  const formatted = Number(salary.replace(/\D/g, ''));
  return formatted;
};

const makeEmployesList = (list) => list.map((listElement, index) => ({
    name: listElement.textContent.trim(),
    position: index + 1,
    salary: (listElement.dataset.salary),
    age: +(listElement.dataset.age),
  }));

const sortList = (list) => {
  return list.sort((elementA, elementB) => {
      return formatSalary(elementB.salary)
       - formatSalary(elementA.salary);
    });
};

let liList = Array.from(document.getElementsByTagName('li'));

console.log('li list: ', liList);

const employees = makeEmployesList(liList);
const unsortedEmpl = [...employees];

console.log('employees: ', sortList(employees));

// buttons functionality:

const showSalaryBtn = document.querySelector('.buttons__button--show');
let isSalaryVisible = false;

const showSalary = (unsortedEmpl) => {
  for (let i = 0; i < liList.length; i++) {
   liList[i].textContent = `${unsortedEmpl[i].name}:  ${unsortedEmpl[i].salary}`;
  }
};

const hideSalary = (unsortedEmpl) => {
  for (let i = 0; i < unsortedEmpl.length; i++) {
    liList[i].textContent = unsortedEmpl[i].name;
  }
};

showSalaryBtn.addEventListener('click',  () => {
  isSalaryVisible = !isSalaryVisible;

  if(isSalaryVisible) {
    showSalary(unsortedEmpl);
    showSalaryBtn.textContent = 'Hide Salary';

  } else {
    hideSalary(unsortedEmpl);
    showSalaryBtn.textContent = 'Show Salary';
  }
});

