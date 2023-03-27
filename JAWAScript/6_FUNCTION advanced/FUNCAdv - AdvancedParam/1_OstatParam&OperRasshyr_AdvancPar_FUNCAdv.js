/* JawaScript 1_OstatParam&OperRasshyr_AdvancPar_FUNCAdv - Остаточные параметры и оператор расширения */
'use strict';


alert("Start 1_OstatParam&OperRasshyr_AdvancPar_FUNCAdv");


function showName(firstName, lastName, ...titles) {   // Оставшиеся параметры пойдут в массив titles = ["Консул", "Император"]
    alert( firstName + ' ' + lastName ); // Юлий Цезарь
    alert( titles[0] ); // Консул
    alert( titles[1] ); // Император
    alert( titles.length ); // 2
  }
showName("Юлий", "Цезарь", "Консул", "Император");

function showName() {   // Существует встроенньій бъект - псевдомассив arguments, его можно перебирать
    alert( arguments.length );
    alert( arguments[0] );
    alert( arguments[1] );
  
    // for (let arg of arguments) alert(arg);
}
 
  showName("Юлий", "Цезарь");  // Вывод: 2, Юлий, Цезарь
  
  showName("Илья");           // Вывод: 1, Илья, undefined (второго аргумента нет)


//  Оператор расширения
let arr = [3, 5, 1];
alert( Math.max(...arr) ); // 5 (оператор "раскрывает" массив в список аргументов)

//Оператор расширения можно использовать и для слияния массивов:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(...arr1, ...arr2) ); // 8
alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
alert(merged); // 0,3,5,1,2,8,9,15 (0, затем arr, затем 2, в конце arr2)

let str = "Привет";
alert( [...str] ); // П,р,и,в,е,т

alert("End");
