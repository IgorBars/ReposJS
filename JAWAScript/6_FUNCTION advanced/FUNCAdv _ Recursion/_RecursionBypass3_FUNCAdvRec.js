/* JawaScript - Рекурсия и стек */
'use strict';

alert("Start _RecursionBypass3_FUNCAdvRec");


// Рекурсивные обходы
let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}],
      subdevelopment: {
        // sub2development: {
        //   sub2sites: [{name: 'Peter2', salary: 2000}, {name: 'Alex2', salary: 1800 }],
        //   sub2internals: [{name: 'Jack2', salary: 1300}],
        // },
        subsites: [{name: 'Peter1', salary: 2000}, {name: 'Alex1', salary: 1800 }],
        subinternals: [{name: 'Jack1', salary: 1300}],
      },
    },
  };
  

// Массив объектов
// let company = [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }];

// Функция для рекурсивного подсчёта суммы зарплат объекта с массивами объектов
  function sumSalaries(department) {//запуск функции

        if (Array.isArray(department)) {return department.reduce((sum, elem) => sum + elem.salary, 0);
// Инструкция .reduce выполняется при каждом внутреннем рекурсивном вызове,
// если в аргументе находится массив, т.к. распол в области прямого цикла рекурсии
// .reduce НЕ обрабатывает массив, обернутый в объект,
// .reduce обрабатывает ТОЛЬКО чистый массив (либо извне, либо
//   вытащенный из объекта и предоставленный ей методом Object.values,
//  находящимся также в области прямого цикла рекурсии. На него передается 
// выполнение, если аргумент при запуске функции - не "чистый" массив.
          }  else {
          let sum = 0;
          for (let subdep of Object.values(department)) {// возвр массив массивов
              alert(subdep[0].name);
            sum += sumSalaries(subdep);// каждый массив из массива массивов
          }                     // помещаем в аргумент внутреннего вызова и 
                                //дальше выполнение 
                                //передается на запуск функции 
                                //(см. инструкцию 
                                //  function  sumSalaries(department))
          
          return sum;  
        }
  }
  
  alert(sumSalaries(company)); // 1600[массив], 6700 (sub: 11800)


alert("End");
