/* JawaScript - 7_str_normalize_UnicodРазное                «Юникодная нормализация»

-  str.normalize()

При добавлении дополнительньіх символов к основному возникает определенная проблема: 
два символа могут визуально выглядеть одинаково, но при этом они будут представлены разными комбинациями Юникода.
*/
'use strict';
alert("Start 7_str_normalize_UnicodРазное");


let s1 = 'S\u0307\u0323'; // Ṩ, S + точка сверху + точка снизу
let s2 = 'S\u0323\u0307'; // Ṩ, S + точка снизу + точка сверху

alert( `s1: ${s1}, s2: ${s2}` );

alert( s1 == s2 ); // false, хотя символы выглядят одинаково (?!)



alert( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true
//в нашем случае normalize() «схлопывает» последовательность из трёх символов в один: \u1e68 — S с двумя точками.
alert( "S\u0307\u0323".normalize().length );      // 1

alert( "S\u0307\u0323".normalize() == "\u1e68" ); // true


alert("End");

