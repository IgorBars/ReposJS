/* JawaScript - Promisify_LoadScriptHW2_PromisyPromisific
                                            Загрузка js-файла из дочерней папки
*/
'use strict';

alert("Start Promisify_LoadScriptHW2_PromisyPromisific"); //  
// Промисифицируем loadScript


//функция loadScript которая в процессе выполнения НЕ ИЗМЕНЯЕТСЯ
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
  document.head.append(script);
} 

//декорируем ее, чтобы она работала как Promise, c .then/.catch
function promisifyDecorator(f) {
  return function (src) { // вызов возвращает функцию-обёртку
    return new Promise((resolve, reject) => {
    //создаем callback, затем вызываем с ним нашу НЕИЗМЕНЯЕМУЮ функцию 
      function callback(err, result) { 
        if (err) reject(err);
        else resolve(result);
      }
   // вызываем оригинальную функцию loadScript с аргументами: адрес и callback 
    f.call(this, src, callback); 
   });
  };
};

let loadScriptPromise = promisifyDecorator(loadScript); //теперь обычная функция работает как Promise

//вызов
loadScriptPromise('my_Folder/my_script.js')
  .then(script => {
     alert(script.src); // адрес скрипта 
     //скрипт загрузился, стали доступные переменные, функции и т.п.
     alert(user.name); // Vasya
  })
  .catch(err => alert(err));
  
  //создаем в той же папке, что и наш html - JS файл  my_script.js в котором будет литерал объекта: 
  //let user = {name: 'Vasya'};


alert("End");
