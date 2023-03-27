/* JawaScript - Ex_animals2_IntlCollator_РазнIntl

Используя Intl.Collator, отсортируйте массив с буквой ё:
*/

'use strict';
alert("Start Ex_animals2_IntlCollator_РазнIntl");

 
let animals = ["Тигр", "ёж", "Енот", "еж", "тигр", "енот", "АИСТ", "ЯК", "як"];   // ПРОПИСНЬІЕ и ё "случайно" стоят первьіми

let collator = new Intl.Collator(undefined, {
    
    sensitivity: "base"      // (а ≠ б, е = ё, а = А)    без сортировки строчньіе/ПРОПИСНЬІЕ, е/ё
    // sensitivity: "variant"      // (а ≠ б, е ≠ ё, а ≠ А)    плюс сортировка строчньіе/ПРОПИСНЬІЕ, е/ё
});

animals.sort((a, b) => collator.compare(a, b));

// alert( animals );   // АИСТ,ёж,еж,Енот,енот,Тигр,тигр,ЯК,як  ("base")    -без сортировки строчньіе/ПРОПИСНЬІЕ, е/ё
alert( animals );   // АИСТ,еж,ёж,енот,Енот,тигр,Тигр,як,ЯК     ("variant")  -строчньіе,е имеют приоритет перед ПРОПИСНЬІМИ,ё

alert("End");

