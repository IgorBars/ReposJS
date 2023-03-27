/* JawaScript - Ex_delay2_DecorFUNCAdv.     
Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
Pешение должно передавать все аргументы и контекст this
 */
'use strict';

alert("Start Ex_delay2_DecorFUNCAdv");

function f(x, y) {
    alert(x + y);
}

function delay(f, timeout) {

    return function() {

        setTimeout(() => {
            f.apply(this, arguments);
        }, timeout);
    }
}

let f2000 = delay(f, 2000);
let f4000 = delay(f, 4000);

f2000("test2000", "test2000"); // показывает "test" после 1000 мс
f4000("test4000", "test4000"); // показывает "test" после 1500 мс



alert("End");