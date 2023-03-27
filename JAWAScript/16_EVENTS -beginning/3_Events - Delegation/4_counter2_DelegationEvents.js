/* JawaScript - 4_counter2_DelegationEvents               
применение делегирования.

Делегирование событий можно использовать для добавления элементам «поведения» (behavior), 
декларативно задавая хитрые обработчики установкой специальных HTML-атрибутов и классов.

Приём проектирования «поведение» состоит из двух частей:

    -Элементу ставится пользовательский атрибут, описывающий его поведение.

    -При помощи делегирования ставится обработчик на документ, который ловит все клики (или другие события) и, 
     если элемент имеет нужный атрибут, производит соответствующее действие.

Например, здесь HTML-атрибут data-counter добавляет кнопкам поведение: «увеличить значение при клике»:
*/

'use strict';
alert("Start 4_counter2_DelegationEvents");

let form = document.getElementById('form');// form.querySelector

form.addEventListener('click', function(event) {
    
    if (event.target.dataset.counter == undefined) return;   // если нет атрибута data-counter...

    let div = event.target.closest('[data-count]');         // родитель-сч для обработки кнопкой-потомком
    if (!div) return;
    let counter = div.querySelector('input');               // родитель-сч для обработки кнопкой-потомком

    if (event.target.dataset.counter == "encr") {
        counter.style.backgroundColor = "lightgreen";
        counter.value++;

    } else if (event.target.dataset.counter == 'decr') {
        counter.style.backgroundColor = "red";
        counter.value--;
    }
});



alert("End");