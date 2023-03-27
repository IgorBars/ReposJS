/* JawaScript - HW_comment_DateObjKeys
Прикольно перегнать объект в массив, поработать с его методами, а потом опять преобразовать в объект.
*/


'use strict';

alert("Start HW_comment_DateObjKeys");

let obj={
    name: 'Vasja',
    work: 'engineer',
    age: 30
}
let entr = Object.entries(obj);  // [ ["name", 'Vasja'], ["work", 'engineer'], ["age", 30] ]
alert( entr );                   //    name,Vasja,work,engineer,age,30

entr.push( ['hobby', 'fishing'] ); // [ ["name", 'Vasja'], ["work", 'engineer'], ["age", 30], ['hobby','fishing'] ]

entr.splice( 2, 1, ['children','Bob and Sam'] ); // [ ["name", 'Vasja'], ["work", 'engineer'], ['children','Bob and Sam'], ['hobby','fishing'] ]

let res = entr.reduce( (acc, curr)=> ( acc[curr[0]] = curr[1], acc ), {} ); // {name: Vasja, work: engineer, children: Bob and Sam, hobby: fishing}

entr = Object.entries(res); // [ name,Vasja,work,engineer,children,Bob and Sam,hobby,fishing ]

alert( entr ); // 

alert("End");
