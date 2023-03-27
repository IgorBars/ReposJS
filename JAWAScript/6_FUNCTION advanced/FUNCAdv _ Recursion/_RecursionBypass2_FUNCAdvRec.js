/* JawaScript - Рекурсия и стек */
'use strict';

alert("Start _RecursionBypass2_FUNCAdvRec");


// Рекурсивные обходы
// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//       sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//       internals: [{name: 'Jack', salary: 1300}],
//       subdevelopment: {
//         subsites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//         subinternals: [{name: 'Jack', salary: 1300}],
//       }
//     }
//   };
  

// Массив объектов
let company = [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }];

  // Функция для подсчёта суммы зарплат массива объектов
  function sumSalaries(department) {
        if (!Array.isArray(department)) alert("department - не массив объектов");
        return department.reduce((sum, elem) => sum + elem.salary, 0);
  }
  
  alert(sumSalaries(company)); // 6700 (sub: 11800)


alert("End");
