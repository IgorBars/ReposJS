/* JawaScript - partial_DecorFUNCAdv.
    
Прив'язані аргументи
 */
'use strict';

alert("Start partial_DecorFUNCAdv");


function partial(func, ...argsBound) {  // приймає ф-ю і фіксовані аргументи
    return function(...args) {          // (*)  обгортка приймає аргументи
      return func.call(this, ...argsBound, ...args);
    }
}

// использование:
let user = {
firstName: "John",
say(time, phrase) {                       // метод приймає аргументи
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
}
};

// добавляем частично применённый метод с фиксированным временем
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes()); // приймає ф-ю і фіксовані аргументи

user.sayNow("Hello");                                                    // (*)  обгортка приймає аргументи замість метода
// Что-то вроде этого:
// [10:00] John: Hello!


alert("End");
