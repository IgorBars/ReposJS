/* JawaScript - Деструктуризация объекта */
// присваивание переменным значений из Объекта
// При присваивании от объекта - шаблон переменных(скобки у переменных), как у объекта!
// іНазви змінних повинні повторювати назви властивостей объекта!
'use strict';

alert("Start Destruct_Obj_DataDestrAss");

// Синтаксис     let {var1, var2} = {var1:…, var2:…}

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;
  //Свойства options.title, options.width и options.height присваиваются 
  //соответствующим переменным title, width, height
alert("title: " + title);  // Menu
alert("width: " + width);  // 100
alert("height: " + height); // 200


//Двоеточие показывает «что : куда идёт». В примере свойство width сохраняется в переменную w,
// свойство height сохраняется в h, а title присваивается одноимённой переменной:
options = {
  title1: "Menu",
  width: 100,
  height: 200
};
  let {width: w, height: h, title1} = options;
  
  // width1 -> w
  // height1 -> h
  // title1 -> title
  
  alert("title: " + title1);  // Menu
  alert("w: " + w);      // 100
  alert("h: " + h);      // 200

//Для потенциально отсутствующих свойств мы можем установить 
//значения по умолчанию, используя "="
  options = {
    title2: "Menu"
  };
  
  let {width2 = 100, height2 = 200, title2} = options;
  
  alert("из объекта дестр присваиванием title2: " + title2);  // Menu
  alert("по умолчанию width2: " + width2);  // 100
  alert("по умолчанию height2: " + height2); // 200


// Как и в случае с массивами, значениями по умолчанию могут быть любые 
// выражения или даже функции. Они выполнятся, если значения отсутствуют.
//   let options = {
//     title: "Menu"
//   };
  
//   let {width = prompt("width?"), title = prompt("title?")} = options;
  
//   alert("по умолчанию title: " + title);  // Menu
//   alert("результат prompt width:" + width);  // (результат prompt)


//   Мы также можем совмещать : и =

//   let options = {
//     title: "Menu"
//   };
  
//   let {width: w = 100, height: h = 200, title} = options;
  
//   alert(title);  // Menu
//   alert(w);      // 100
//   alert(h);      // 200


// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
  
//   // взять только title, игнорировать остальное
//   let { title } = options;
//   let { width } = options;
//   alert(title); // Menu
//   alert(width); 


  //Остаток объекта «…»
  options = {
    title3: "Menu",
    height: 200,
    width: 100
  };
  
  // title = свойство с именем title
  // rest = объект с остальными свойствами
  let {title3, ...rest} = options;
  
  // сейчас title="Menu", rest={height: 200, width: 100}
  alert(rest.height);  // 200
  alert(rest.width);   // 100

alert("End");
