/* JawaScript - Ex_animals_IntlCollator_РазнIntl

Используя Intl.Collator, отсортируйте массив с буквой ё:
*/

'use strict';
alert("Start Ex_animals_IntlCollator_РазнIntl");


let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];// тигр,енот,ёж,ехидна,АИСТ,ЯК

let collator = new Intl.Collator(undefined, {
    
    sensitivity: "base"    // (а ≠ б, е = ё, а = А)  изменяем [options] конструктора Collator для получения об'ьекта collator с требуемьіми св-вами
});

animals.sort((a, b) => collator.compare(a, b));

alert( animals );   // АИСТ,ёж,енот,ехидна,тигр,ЯК   ("base")


alert("End");

