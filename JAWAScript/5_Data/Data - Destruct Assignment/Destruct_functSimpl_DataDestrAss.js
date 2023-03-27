/* JawaScript - деструктуризация в параметрах функции   Destruct_funct_DataDestrAss */

//Пожалуйста, обратите внимание, что такое деструктурирование подразумевает,
// что в showMenu() будет обязательно передан аргумент. Если нам нужны все 
//значения по умолчанию, то нам следует передать пустой объект:
//  showMenu({}); // ок, все значения - по умолчанию
//  showMenu(); // так была бы ошибка

'use strict';

alert("Start Destruct_funct_DataDestrAss");

// мы передаём объект в функцию
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  // ...и она немедленно извлекает свойства в переменные
  function showMenu( { title = "Untitled", width = 200, height = 100, items = [] } ) {
    // title, items – взято из options,
    // width, height – используются значения по умолчанию
    alert( `${title} ${width} ${height}` ); // My Menu 200 100
    alert( items ); // Item1, Item2
  }
  
  showMenu(options);


alert("End");

