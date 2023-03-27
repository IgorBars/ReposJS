/* JawaScript - 5_toggler3_DelegationEvents               
применение делегирования.

Делегирование событий можно использовать для добавления элементам «поведения» (behavior), 
декларативно задавая хитрые обработчики установкой специальных HTML-атрибутов и классов.

            Поведение: «Переключатель» (Toggler)
Сделаем так, что при клике на элемент с атрибутом data-toggle-id будет скрываться/показываться элемент с заданным id/атрибутом:
*/

'use strict';
alert("Start 5_toggler3_DelegationEvents");



document.addEventListener('click', function(event) {         //document.getA toggleId

    let dataToggleId = event.target.dataset.toggleId;
    
    if (!dataToggleId) return;                              // если не на кнопке

    let div = event.target.closest('.leine');               // родительский div для event.target
    if (!div) return;  

    let form = div.querySelector('form[data-toggle="subscribe"]');  

    form.hidden = !form.hidden;
});




alert("End");