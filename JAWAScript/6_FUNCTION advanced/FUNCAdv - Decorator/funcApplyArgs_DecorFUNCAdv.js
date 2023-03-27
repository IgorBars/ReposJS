/* JawaScript - funcApplyArgs_DecorFUNCAdv.    Передача контекста с пом. func.apply(context, args);

 */
'use strict';
alert("Start funcApplyArgs_DecorFUNCAdv");

// маємо потрібний метод someMethod у доступному об'єкті worker
let worker = {
    someMethod() {
        return "Summ: ";
    }
};

// використаємо у пересічній функції потрібний метод someMethod із доступного об'єкту worker
function work(...argums) {    // приймає СПИСОК аргументів і кладе його в МАСИВ argums 
    let res = 0;
    for(let el of argums) res += el;
    return  this.someMethod() + res;
    // return  worker.someMethod() + res;
}
// alert( work(1, 2, 3) );


function Decorator(func) {
        return function wpapper(...args) {      // обгортка приймає СПИСОК аргументів і кладе їх у МАСИВ args
            return  func.apply(worker, args);   // прив'яжемо контекст worker, інакше:   worker.work = Decorator(work);
        }  
}

work = Decorator(work);

alert( "func(x): " + work(1, 2, 3) );                        // func(x): Summ: 6
alert( "func(x): " + work(1, 2, 3, 4, 5, 6, 7, 8, 9) );      // func(x): Summ: 45



alert("End");