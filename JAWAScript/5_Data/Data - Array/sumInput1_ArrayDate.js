/* JawaScript -  Сохранять вводы в массив, суммировать */
'use strict';

alert("Start sumInput1_ArrayDate");

function sumInput() {
    let arr = [];
    let sum = 0;
    let num = 0;

    for (let i = 0; isFinite(num) ; i++) {
        num = prompt("Вв число", );
        if (!isFinite(num) || num == "" || num == null || num == " ") break;
        //arr[i] = +num;
        arr.push(+num);
    }

    for(let char of arr){
        sum += char;
    }

    alert(`arr:  ${arr}`);
    return sum;

} 

alert("sumAut  " + sumInput() );


alert("End");
