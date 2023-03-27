/* JawaScript - Ex1_coordsGreenField_CoordsDocument         
Найдите координаты точек относительно окна браузера

В ифрейме ниже располагается документ с зелёным «полем».

Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.

*/

'use strict';
alert("Start Ex1_coordsGreenField_CoordsDocument");


let field = document.getElementById('field');

let coordinates = field.getBoundingClientRect();

let answer1 = [coordinates.left, coordinates.top];
let answer2 = [coordinates.right, coordinates.bottom];

alert(answer1[0] + ': ' + answer1[1]);
alert(answer2[0] + ': ' + answer2[1]);

let answer3 = [coordinates.left + field.clientLeft, coordinates.top + field.clientTop];
let answer4 = [coordinates.left + field.clientLeft + field.clientWidth, coordinates.top + field.clientTop + field.clientHeight];

alert(answer3[0] + ': ' + answer3[1]);
alert(answer4[0] + ': ' + answer4[1]);


alert("End");