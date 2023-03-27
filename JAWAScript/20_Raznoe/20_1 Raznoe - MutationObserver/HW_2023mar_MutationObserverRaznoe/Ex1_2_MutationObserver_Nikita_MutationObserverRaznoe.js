/* JawaScript - Ex1_2_MutationObserver_Nikita_MutationObserverRaznoe               

Отследить изменения в <div id="elem">

Каждые несколько секунд содержание <div id="elem"> меняется

Ваша задача отследить изменения в <div id="elem"> и вывести console.log сообщение:
  - Удалено "текст"
  - Добавлено "текст"
*/

'use strict';
alert("Start Ex1_2_MutationObserver_Nikita_MutationObserverRaznoe");                  // вариант от Nikita Belevich (2020 авг)


function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let list = ['рыба','мясо','трава','планета','космос'];

setInterval(function(){
  let elem = document.getElementById('elem');
  elem.textContent = list[randomInteger(0,list.length - 1)]     // list[3]  ...list[0]  ...
}, 2000);
 

 // Ваш скрипт ниже
let element = document.getElementById('elem');
const outChanges = document.querySelector('.changes');

let observer = new MutationObserver(mutationRecords => {	
  if (mutationRecords[0].removedNodes[0]) {                    // если есть св removedNodes[0]
    outChanges.innerHTML = `Удалён текст: ${ (mutationRecords[0].removedNodes[0].nodeValue.trim() || "Ничего") }`; //  .trim() - удаление пробелов слева/справа
  }
  if (mutationRecords[0]['addedNodes'][0] ) {
    outChanges.innerHTML += `<br> Добавлен текст: ${ mutationRecords[0]['addedNodes'][0].data }`;
  }
});

observer.observe(element, {
  childList: true, // наблюдать за непосредственными детьми
});




alert("End");