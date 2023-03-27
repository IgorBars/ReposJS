/* JawaScript - Ex1_MutationObserver_forEach_MutationObserverRaznoe               

Отследить изменения в <div id="elem">

Каждые несколько секунд содержание <div id="elem"> меняется

Ваша задача отследить изменения в <div id="elem"> и вывести console.log сообщение
Удалено "текст"
Добавлено "текст"
*/

'use strict';
alert("Start Ex1_MutationObserver_forEach_MutationObserverRaznoe");


function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
let list = ['рыба','мясо','трава','планета','космос'];

setInterval(function() {
  let elem = document.getElementById('elem');
    elem.textContent = list[randomInteger(0, list.length - 1)]
}, 3000)
 
 // Ваш скрипт ниже
let observer = new MutationObserver(function(mutations) {
  mutations.forEach(mutation => {                                      // (mutation == mutationRecords[0], mutation == mutationRecords[1])
      if(mutation.removedNodes[0]?.data) {                             // при 1-й отработке св removedNodes[0].data отс
        console.log( `Удалено ${ (mutation.removedNodes[0].data.trim() || "Ничего") }` );    //  .trim() - удаление пробелов слева/справа
      }                                                                // если не удалить .trim() пробельі - они вьіведутся как результат
      if(mutation.addedNodes[0]?.data) {
        console.log( `Добавлено ${ mutation.addedNodes[0].data }` );
      }
  });
});
 
observer.observe(elem, {
 childList:true,
})


alert("End");