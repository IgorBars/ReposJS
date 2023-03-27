/* JawaScript - Рекурсия и стек */
'use strict';

alert("Start _RecursionBypass4_FUNCAdvRec");

let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}],
      subdevelopment: {
        sub2development: {
          sub2sites: [{name: 'Peter2', salary: 2000}, {name: 'Alex2', salary: 1800 }],
          sub2internals: [{name: 'Jack2', salary: 1300}],
        },
        subsites: [{name: 'Peter1', salary: 2000}, {name: 'Alex1', salary: 1800 }],
        subinternals: [{name: 'Jack1', salary: 1300}],
      },
    },
  };
  alert("Start 2");
  for (let subdep of Object.values(company)) {
    if (Array.isArray(subdep)) {
        alert(subdep[0].name + " " + subdep[0].salary); 
        if (subdep[1]) alert(subdep[1].name + " " + subdep[1].salary);
    }
  }   
    alert("End 2");
// Массив объектов
// let company = [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }];

// Функция для рекурсивного подсчёта суммы зарплат объекта с массивами объектов
  function sumSalaries(department) {//запуск функции

        if (Array.isArray(department)) {
            return department.reduce((sum, elem) => sum + elem.salary, 0);
          }  else {
          let sum = 0;
          alert("Object.values");
          for (let subdep of Object.values(department)) {
            if (Array.isArray(subdep)) {
                alert(subdep[0].name + " " + subdep[0].salary); 
                if (subdep[1]) alert(subdep[1].name + " " + subdep[1].salary);
            }
            sum += sumSalaries(subdep); alert(sum);
          }                    
          
          return sum;  
        }
  }
  
  alert(sumSalaries(company)); // 1600[массив], 6700 (sub: 11800)


alert("End");
