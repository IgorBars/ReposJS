/* JawaScript - 5_toggler2_DelegationEvents               
применение делегирования.

Делегирование событий можно использовать для добавления элементам «поведения» (behavior), 
декларативно задавая хитрые обработчики установкой специальных HTML-атрибутов и классов.

            Поведение: «Переключатель» (Toggler)
Сделаем так, что при клике на элемент с атрибутом data-toggle-id будет скрываться/показываться элемент с заданным id:
*/

'use strict';
alert("Start 5_toggler2_DelegationEvents");


document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
});


// Теперь для того, чтобы добавить скрытие-раскрытие любому элементу, даже не надо знать JavaScript, 
// можно просто написать атрибут data-toggle-id.

// Это бывает очень удобно – не нужно писать JavaScript-код для каждого элемента, который должен так себя вести. 
// Просто используем поведение. Обработчики на уровне документа сделают это возможным для элемента в любом месте страницы.

alert("End");