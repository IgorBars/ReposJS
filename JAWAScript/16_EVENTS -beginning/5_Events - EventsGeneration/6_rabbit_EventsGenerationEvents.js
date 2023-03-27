/* JawaScript - 6_rabbit_EventsGenerationEvents               

Ниже вы можете видеть кролика #rabbit и функцию hide(), которая при вызове генерирует на нём событие "hide", уведомляя всех интересующихся, 
что кролик собирается спрятаться.

Любой обработчик может узнать об этом, подписавшись на событие hide через rabbit.addEventListener('hide',...) и, при желании, 
отменить действие по умолчанию через event.preventDefault(). Тогда кролик не исчезнет:
*/

'use strict';
alert("Start 6_rabbit_EventsGenerationEvents");


// hide() ф-я будет вызвана при щелчке на кнопке
function hide() {
    let event = new CustomEvent("hide", {            // создаеется пользовательское собьітие "hide"
        cancelable: true                             // без этого флага preventDefault не сработает (возможность отменьі собьітия "hide" из обработчика)
    });
    if (!rabbit.dispatchEvent(event)) {              // навешиваем на rabbit собьітие "hide", проверка обработчика на требование отменьі собьітия "hide" 
        alert('Действие отменено обработчиком');     // реакция генератора собьітия "hide" в сл отменьі собьітия "hide" (если rabbit.dispatchEvent(event) = false)
    } else {
        rabbit.hidden = true;                   // прописьіваем суть собьітия "hide" (в сл отс отменьі, если rabbit.dispatchEvent(event) = true) 
    }
}

rabbit.addEventListener('hide', function(event) {   // навешиваем на rabbit обработчик собьітия "hide"

    if (confirm("Вызвать preventDefault? (отменить скрьітие)")) {       // прописьіваем суть обработки: предложить пользователю вьізвать метод отменьі собьітия "hide"
        event.preventDefault();                      // true (=> rabbit.dispatchEvent(event) = false) => отменить собьітие "hide"
    }
});

// Обратите внимание: событие должно содержать флаг cancelable: true. Иначе, вызов event.preventDefault() будет проигнорирован.
alert("End");