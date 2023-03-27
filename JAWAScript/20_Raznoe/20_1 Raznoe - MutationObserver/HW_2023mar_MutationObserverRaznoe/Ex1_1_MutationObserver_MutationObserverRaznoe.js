/* JawaScript - 2_Prism.Ex1_1_MutationObserver_MutationObserverRaznoe               

Отследить изменения в <div id="elem">

Каждые несколько секунд содержание <div id="elem"> меняется

Ваша задача отследить изменения в <div id="elem"> и вывести console.log сообщение:
  - Удалено "текст"
  - Добавлено "текст"
*/

'use strict';
alert("Start Ex1_1_MutationObserver_MutationObserverRaznoe");


function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);           // +1 - потому что Math.floor
  return Math.floor(rand);
}

let list = ['рыба','мясо','трава','планета','космос'];

setInterval(function(){
  let elem = document.getElementById('elem');
  elem.textContent = list[randomInteger(0, list.length - 1)]     // list[3]  ...list[0]  ...
}, 2000);
 

 // Ваш скрипт ниже
let element = document.getElementById('elem');

let observer = new MutationObserver(mutationRecords => {	
  if (mutationRecords['0']['removedNodes']) {                                          // если есть св removedNodes
    console.log(                                                                       //  .trim() - удаление пробелов начальньіх/концевьіх
      'Удалено: ' + (mutationRecords[0].removedNodes[0].nodeValue.trim() || "Ничего") + 
      " /" + 'Добавлено: ' + mutationRecords[0].addedNodes[0].nodeValue
    );
  } 
});

observer.observe(element, {
  childList: true, // наблюдать за непосредственными детьми
});




alert("End");