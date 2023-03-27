/* JawaScript - Рекурсия и стек */
'use strict';

alert("Start _RecursionBypassSimpl_FUNCAdvRec");


// спочатку просто масив об'єктів
let sales = [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }];

function sumSalaries(department) {

    if ( Array.isArray(department) ) {

        return department.reduce( (sum, user) => sum + user.salary, 0);
    }
}

alert( sumSalaries(sales) );    // 1600




alert("End");
