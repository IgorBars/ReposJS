/* JawaScript - Destruct_nested_DataDestrAss
                Вложенная деструктуризация
*/

'use strict';

alert("Start Destruct_nested_DataDestrAss");

let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  

  let {
    size: { // положим size сюда
      width,
      height
    },
    items: [item1, item2], // добавим элементы к items
    title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
                  //  властивість extra не копіюємо навмисно (наприклад, немає необхідності)
  } = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut

alert("End");

