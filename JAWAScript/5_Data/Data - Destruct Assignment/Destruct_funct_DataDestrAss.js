/* JawaScript - деструктуризация в параметрах функции с 
назначенными переменными*/

//Пожалуйста, обратите внимание, что такое деструктурирование подразумевает,
// что в showMenu() будет обязательно передан аргумент. Если нам нужны все 
//значения по умолчанию, то нам следует передать пустой объект:

//  showMenu({}); // ок, все значения - по умолчанию
//  showMenu(); // так была бы ошибка

'use strict';

alert("Start Destruct_funct_DataDestrAss");


let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  function showMenu({
    title = "Untitled",
    width: w = 100,  // width присваиваем в w
    height: h = 200, // height присваиваем в h
    items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
  }) {
    alert( `${title} ${w} ${h}` ); // My Menu 100 200
    alert( item1 ); // Item1
    alert( item2 ); // Item2
  }
  
  showMenu(options);


alert("End");

