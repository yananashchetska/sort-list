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
let unsortedEmpl = [...employees];

console.log('employees: ', sortList(employees));

// buttons functionality:

const showSalaryBtn = document.querySelector('.buttons__button--show');
let isSalaryVisible = false;

const showSalary = (unsortedEmpl) => {
  liList.forEach((li, i) => {
    li.textContent = `${unsortedEmpl[i].name}: ${unsortedEmpl[i].salary}`;
  });
};

const hideSalary = (unsortedEmpl) => {
  liList.forEach((li, i) => {
    li.textContent = unsortedEmpl[i].name;
  });
};

//
// Function to update the HTML list
const updateList = (list) => {
  liList.forEach((li, i) => {
    li.textContent = list[i].name + (isSalaryVisible ? `: ${list[i].salary}` : '');
  });
};

// sort button functionality:

const sortSalaryBtn = document.querySelector('.buttons__button--sort');
const unsortedEmplCopy = [...unsortedEmpl];
const buttonsControler = document.querySelector('.buttons');

let isSorted = false;
// let isShown = false;

buttonsControler.addEventListener('click', (ev) => {

  if (ev.target === showSalaryBtn) {
    isSalaryVisible = !isSalaryVisible;

    if (isSalaryVisible) {
      showSalary(unsortedEmpl);
      showSalaryBtn.textContent = 'Hide salary';
    } else {
      hideSalary(unsortedEmpl);
      showSalaryBtn.textContent = 'Show salary';
    }
  }

  if (ev.target === sortSalaryBtn) {
    isSorted = !isSorted;

    if (isSorted) {
      unsortedEmpl = sortList([...unsortedEmpl]);
      sortSalaryBtn.textContent = 'Unsort list';
    } else {
      unsortedEmpl = [...unsortedEmplCopy];
      sortSalaryBtn.textContent = 'Sort by salary';
    }

    updateList(unsortedEmpl);
  }

});