/* JawaScript - Рекурсия и стек */
'use strict';

alert("Start _RecursionBypassSimpl2_FUNCAdvRec");

// let sales = [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }];

// function sumSalaries(department) {

//     if ( Array.isArray(department) ) {

//         return department.reduce( (sum, user) => sum + user.salary, 0);
//     }
// }

// alert( sumSalaries(sales) );    // 1600

let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
};
  
//   Функция для подсчёта суммы зарплат
function sumSalaries(department) {

    if( Array.isArray(department) ) {

        return department.reduce( (sum, user) => sum + user.salary, 0);
    }

    let sum = 0;

    for( let subdep of Object.values(department) ) {

        sum += sumSalaries(subdep);
    }

    return sum;
}

alert( sumSalaries(company) );    // 6700



alert("End");
