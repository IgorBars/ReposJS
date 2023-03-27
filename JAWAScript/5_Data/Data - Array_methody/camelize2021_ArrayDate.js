/* JawaScript -  Преобразовать строки вида «my-short-string» в «myShortString» */
'use strict';

alert("Start camelize2021_ArrayDate");

function camelize(str) {
    let substr = [];
    let splstr = str.split("-");

    for(let el of splstr) {
        if (el == "") continue;
        substr.push(el[0].toUpperCase() + el.slice(1,));
    }
    alert(substr);

    alert(substr.join(""));
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';


alert("End");
