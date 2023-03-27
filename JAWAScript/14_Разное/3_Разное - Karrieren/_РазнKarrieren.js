/* JawaScript - _РазнKarrieren
                                            Принцип карірування
*/
'use strict';

alert("Start _РазнKarrieren");


function curry(f) {

    return function(a) {    // повертає обгортку, яка приймає аргумент а

        return function(b) {    // повертає обгортку, яка приймає аргумент b    

            return function(c) {    // повертає обгортку, яка приймає аргумент c 

                return f(a, b, c);  // нарешті виклик вихідної ф-ї

            };
        };
    };
}

function sum(a, b, c) {
    return (a + b) / c;
}

let carriedSum = curry(sum);

alert( carriedSum(3)(4)(5) );   // 1.4



alert("End");

