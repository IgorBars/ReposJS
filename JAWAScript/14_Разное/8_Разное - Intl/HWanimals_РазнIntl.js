/* JawaScript - _РазнIntl
Используя Intl.Collator, отсортируйте массив,
порядок сортировки не должен зависеть от регистра.
*/
'use strict';

alert("Start HWanimals_РазнIntl");

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator(undefined, {   // Об'ект Collator
    sensitivity: "base"
  });

animals.sort( (el1, el2) => collator.compare(el1, el2) );

// let collator = new Intl.Collator();
// animals.sort(function(a, b) {
//   return collator.compare(a, b);
// });

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК
                    //АИСТ,ёж,енот,ехидна,тигр,ЯК
                    
// ОБЬІЧНЬІЙ ВЬІЗОВ sort()
alert( animals.sort() ); // АИСТ,ЯК,енот,ехидна,тигр,ёж

alert("End");

