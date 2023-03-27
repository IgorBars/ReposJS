/* JawaScript - Сохранять вводы в массив, суммировать */
'use strict';

alert("Start sumInput_Array");

function sumInput() {
    let numbers =  [];
    
    while (true) {
        let value = prompt("Вв ч", );
        // Прекращаем ввод?
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers)
    sum += number;

    alert(`numbers:  ${numbers}`);
    return sum;
}

alert("Result:  " + sumInput() );


alert("End");
