/* JawaScript - 4_counter_DelegationEvents               
применение делегирования.

Делегирование событий можно использовать для добавления элементам «поведения» (behavior), 
декларативно задавая хитрые обработчики установкой специальных HTML-атрибутов и классов.

Приём проектирования «поведение» состоит из двух частей:

    -Элементу ставится пользовательский атрибут, описывающий его поведение.

    -При помощи делегирования ставится обработчик на документ, который ловит все клики (или другие события) и, 
     если элемент имеет нужный атрибут, производит соответствующее действие.

Например, здесь HTML-атрибут data-counter добавляет кнопкам поведение: «увеличить значение при клике»:


Счётчик: <input type="button" value="1" data-counter>
Ещё счётчик: <input type="button" value="2" data-counter>
*/

'use strict';
alert("Start 4_counter_DelegationEvents");


document.addEventListener('click', function(event) {

    if (event.target.dataset.counter != undefined) { // если есть атрибут...
      // event.target.dataset.counter == null
      event.target.value++;
    }

});



alert("End");