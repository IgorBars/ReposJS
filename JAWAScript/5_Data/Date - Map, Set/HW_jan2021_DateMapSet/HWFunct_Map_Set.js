/* JawaScript - HWFunct Map, Set*/


'use strict';

alert("Start HWFunct_Map_Set");

let options = {
    title: "My menu",
    width: 350,
    height: 450,
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

