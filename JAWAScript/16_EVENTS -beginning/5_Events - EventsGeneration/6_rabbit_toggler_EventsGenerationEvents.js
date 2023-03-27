/* JawaScript - 6_rabbit_toggler_EventsGenerationEvents               

Ниже вы можете видеть кролика #rabbit и функцию hide(), которая при вызове генерирует на нём событие "hide", уведомляя всех интересующихся, 
что кролик собирается спрятаться.

Любой обработчик может узнать об этом, подписавшись на событие hide через rabbit.addEventListener('hide',...) и, при желании, 
отменить действие по умолчанию через event.preventDefault(). Тогда кролик не исчезнет:
*/

'use strict';
alert("Start 6_rabbit_toggler_EventsGenerationEvents");


// toggle() ф-я будет вызвана при щелчке на кнопке
function toggle() {
    let event = new CustomEvent("toggle", {            // создаеется пользовательское собьітие "toggle"
        cancelable: true                             // без этого флага preventDefault не сработает (возможность отменьі собьітия "toggle" из обработчика)
    });
    if (!rabbit.dispatchEvent(event)) {              // навешиваем на rabbit собьітие "toggle", проверка обработчика на требование отменьі собьітия "toggle" 
        alert('Действие отменено обработчиком');     // реакция генератора собьітия "toggle" в сл отменьі собьітия "toggle" (если rabbit.dispatchEvent(event) = false)
    } else {
    
        rabbit.hidden = !rabbit.hidden;            // прописьіваем суть собьітия "toggle" 
    }
}

rabbit.addEventListener('toggle', function(event) {   // навешиваем на rabbit обработчик собьітия "toggle"

    if (confirm("Вызвать preventDefault? (отменить toggle())")) {       // прописьіваем суть обработки: предложить пользователю вьізвать метод отменьі собьітия "hide"
        event.preventDefault();                      // true (=> rabbit.dispatchEvent(event) = false) => отменить собьітие "hide"
    }
});

// Обратите внимание: событие должно содержать флаг cancelable: true. Иначе, вызов event.preventDefault() будет проигнорирован.
alert("End");