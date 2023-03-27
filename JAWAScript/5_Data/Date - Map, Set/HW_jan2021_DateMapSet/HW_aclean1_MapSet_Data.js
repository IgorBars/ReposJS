/* JawaScript - вернуть массив слов, очищенный от анаграмм */

// реализация без Map (с if)
'use strict';

alert("Start HW_aclean1_MapSet_Data");

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
    
function aclean(arr) {
    let arrFilter = [];
    let arrResult = [];
    for(let char of arr) {                              //nap...
        let controlChar = char.toLowerCase().split("").sort().join("");
        //элемент массива nap изменяем в нижний регистр         .toLowerCase()
        //далее разрезаем на буквы => массив букв [n,a,p]       .split("")
        //далее сортируем массив букв [a,n,p]                   .sort()
        //далее склеиваем массив в слово anp и сохраняем в перем controlChar
        if (!arrFilter.includes(controlChar)) {
            arrFilter.push(controlChar);
            arrResult.push(char);
        }
    }
    return arrResult;
}


alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

alert("End"); 
