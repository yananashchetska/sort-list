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

// sort button functionality:

const sortSalaryBtn = document.querySelector('.buttons__button--sort');

const unsortedEmplCopy = [...unsortedEmpl];
const buttonsControler = document.querySelector('.buttons');

let isSorted = false;
let isShown = false;

const unSortList = (list, oldList) => {
  list = [...oldList];
}
buttonsControler.addEventListener('click', (ev) => {

  if (ev.target === showSalaryBtn) {
    isShown = !isShown;
  }

  if (ev.target === sortSalaryBtn) {
    isSorted = !isSorted;
  }

  if (!isShown) {
    hideSalary(unsortedEmpl);
    showSalaryBtn.textContent = 'Show salary';
  }

  if (isShown) {
    showSalary(unsortedEmpl);
    showSalaryBtn.textContent = 'Hide salary';
  }
  
    if (isSorted) {
      unsortedEmpl = [...employees];
      sortSalaryBtn.textContent = 'Sort by salary';

    }
    
    if (!isSorted) {
    unsortedEmpl = [...unsortedEmplCopy];
    sortSalaryBtn.textContent = 'Unsort by salary';
  }

});