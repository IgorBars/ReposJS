/* JawaScript - funcApplyArguments4_DecorFUNCAdv.    Передача контекста с пом. func.apply(context, arguments)

            arguments - ЗАСТАРІЛЕ використання прихованих аргументів (ПСЕВДОМАСИВ)!!!
 */
'use strict';

alert("Start funcApplyArguments4_DecorFUNCAdv");

let sum = {
    name: "sum",
    get(arr) {                              //  об'єктний метод додавання
        let res = 0;
        for(let el of arr) res += el;
        return res;
    }
};
let mult = {
    name: "mult",
    get(arr) {                              //  об'єктний метод перемноження
        let res = 1;
        for(let el of arr) res *= el;
        return res;
    }
};


function work(...arg) {                     // робоча ф-я, яка звертається до об'єктних методів
    
    return this.name + ": " + this.get(arg);
}

// function Decorator(func) {                  // обгортка з контекстом додавання
//         return function wpapper() {
//             return  func.apply(sum, arguments); 
//         }  
// }

function Decorator(func) {                  // Decorator приймає func з набором аргументів і зберігає їх у arguments
    return function wpapper() {
        return  func.apply(mult, arguments); // потрібний контекст mult вписали від руки))
    }                                       // arguments - це набір аргументів з виклику work(1, 2, 3, 4, 5, 6, 7, 8, 9) );
}

work = Decorator(work);

alert( work(1, 2, 3) );                        // sum: 6         mult: 6
alert( work(1, 2, 3, 4, 5, 6, 7, 8, 9) );      // sum: 45        mult: 362880



alert("End");