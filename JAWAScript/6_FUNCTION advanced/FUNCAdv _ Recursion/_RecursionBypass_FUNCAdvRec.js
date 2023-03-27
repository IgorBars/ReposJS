/* JawaScript - Рекурсия и стек */
'use strict';

alert("Start _RecursionBypass_FUNCAdvRec");



// Рекурсивные обходы
let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}],
      subdevelopment: {
        subsites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        subinternals: [{name: 'Jack', salary: 1300}],
      }
    }
  };
  
  // Функция для подсчёта суммы зарплат
  function sumSalaries(department) {
    if (Array.isArray(department)) { // случай (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // случай (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
      }
      return sum;
    }
  }
  
  alert(sumSalaries(company)); // 6700 (sub: 11800)


alert("End");
