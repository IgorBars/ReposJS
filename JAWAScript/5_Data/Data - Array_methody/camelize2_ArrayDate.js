/* JawaScript - Преобразовать строки вида «my-short-string» 
в «myShortString» */
'use strict';

alert("Start camelize2_ArrayDate");

// (item => item >= a && item <= b)
function camelize(str) {

    let arrstr = str.split("-");
    alert("массив после split: " + arrstr);

    let arrstrUpp = arrstr.map((item, index) => (index == 0)? item: item[0].toUpperCase() + item.slice(1));
    alert("массив Upp: " + arrstrUpp);

    let camelizestr = arrstrUpp.join("");

    return camelizestr;
}

alert(`Строка Upp: ${camelize("background-color")}`);   //  Строка Upp: backgroundColor
alert(`Строка Upp: ${camelize("-webkit-transition")}`); //  Строка Upp: WebkitTransition

alert("End");
