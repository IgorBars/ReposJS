/* JawaScript - iteratorValues_DateIterObj


*/
'use strict';

alert("Start iteratorValues_DateIterObj");

let range = {
    one: "one",
    two: "two",
    three: "three",
    four: "four"
};

range[Symbol.iterator] = function() {  // <= range: итерируемьій об'ект благодаря свойству Symbol.iterator

    const values = Object.values(this); // созд массив знач свойств исх об'ьекта ["one", "two", ...]
    let index = -1;

    return {
        next() {
            index++;

            return {

                value: values[index],

                done: index >= values.length    // если индекс больше длиньі массива => done: true
            };
        }
    };
}

for(let el of range) {

    alert(el);  // one    two    three   four
}

alert("End");
