/* JawaScript - funcApplyArguments2_DecorFUNCAdv.    Передача контекста с пом. func.apply(context, arguments);

            arguments - ЗАСТАРІЛЕ використання прихованих аргументів (ПСЕВДОМАСИВ)!!!

 */
'use strict';

alert("Start funcApplyArguments2_DecorFUNCAdv");

 
let worker = {
    someMethod() {
        return "Summ: ";
    }
};

function work(...arg) {
    let res = 0;
    for(let el of arg) res += el;
    return  this.someMethod() + res;
}



function Decorator(func) {
        return function wpapper() {
            return  func.apply(worker, arguments);  // насильно впихаємо this= worker, інакше   worker.work = Decorator(work);
        }  
}

work = Decorator(work);

alert( "func(x): " + work(1, 2, 3) );                        // func(x): Summ: 6
alert( "func(x): " + work(1, 2, 3, 4, 5, 6, 7, 8, 9) );      // func(x): Summ: 45



alert("End");