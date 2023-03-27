/* JawaScript - Типы данных -Number -isNaN,  */
'use strict';

alert("Start isNaN_Number_Data");


//Значение NaN уникально тем, что оно не является равным ни чему другому, 
//даже самому себе:
alert(`NaN === NaN:  ${NaN === NaN}`); // false

//isNaN(value) преобразует значение в число и проверяет является ли оно NaN:
alert(`isNaN(NaN):  ${isNaN(NaN)}`); // true

alert(`isNaN(undefined):  ${isNaN(undefined)}`); // true

// "str" => NaN
alert(`isNaN("str"):  ${isNaN("str")}`); // true


// null => 0 при отмене Esc
alert(`isNaN(null):  ${isNaN(null)}`); // false

// "0" => 0
alert(`isNaN("0"):  ${isNaN("0")}`); // false
// "" => 0
alert(`isNaN(""):  ${isNaN("")}`); // false  :(

// isFinite() преобразует аргумент в число и возвращает true, 
//если оно является обычным числом, т.е. не NaN/Infinity/-Infinity.


alert(`isFinite(Infinity):  ${isFinite(Infinity)}`); // false

// "str" => NaN
alert(`isFinite("str"):  ${isFinite("str")}`); // false


// null => 0 при отмене Esc
alert(`isFinite(null):  ${isFinite(null)}`); // true

//"" => 0
alert(`isFinite(""):  ${isFinite("")}`); // true

//"0" => 0
alert(`isFinite("0"):  ${isFinite("0")}`); // true



alert("End");
