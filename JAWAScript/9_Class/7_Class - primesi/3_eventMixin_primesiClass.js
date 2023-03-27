/* JawaScript - 3_eventMixin_primesiClass
Многие объекты в браузерной разработке могут генерировать события.
Давайте создадим примесь, которая позволит легко добавлять функциональность по работе с событиями любым классам/объектам.
 */
'use strict';
alert("Start 3_eventMixin_primesiClass"); 

let eventMixin = {
    /**
     * Подписаться на событие, использование:
     * menu.on('select', function(item) { ... }
     */
    on(eventName, handler) {
      if (!this._eventHandlers) this._eventHandlers = {};   // якщо у нашому об'єкті немає властивості "методи_обробки",
                                                    // добавити таку власт з порожнім об'єктом для зберігання "методів_обробки".
      if (!this._eventHandlers[eventName]) {   // якщо у властивості-об'єкті "методи_обробки" немає ключа-властивості eventName,
        this._eventHandlers[eventName] = [];   // добавити такий ключ-власт з порожнім массивом для збер "методів_обробки_eventName"
      }
      this._eventHandlers[eventName].push(handler); // зберегти обробник-eventName у власт "методи_обробки" у масив "методи_обробки_eventName"
    },
// Обработчики хранятся в свойстве _eventHandlers, представляющим собой объект, в котором имя события является ключом, 
//а массив обработчиков – значением.
    /**
     * Отменить подписку, использование:
     * menu.off('select', handler)
     */
    off(eventName, handler) {
    //   let handlers = this._eventHandlers && this._eventHandlers[eventName];
      let handlers = this._eventHandlers && this._eventHandlers[eventName]; alert(handlers); alert(handlers.length);  alert(handlers[0] === handler);
      // value1 && value2             => (value1 == false) => value1        / (value1, value2 != false) => value2
      if (!handlers) return;
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
        //   handlers.splice(i--, 1);
        handlers.splice(i, 1);
        }
      }
    },
  
    /**
     * Сгенерировать событие с указанным именем и данными
     * this.trigger('select', data1, data2);
     */
    trigger(eventName, ...args) {
      if (!this._eventHandlers || !this._eventHandlers[eventName]) {
        return; // обработчиков для этого события нет
      }
  
      // вызовем обработчики
      this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
};
/* Итак, у нас есть 3 метода:

    1   .on(eventName, handler) – назначает функцию handler, чтобы обработать событие с заданным именем. Обработчики хранятся 
        в свойстве _eventHandlers, представляющим собой объект, в котором имя события является ключом, 
        а массив обработчиков – значением.

    2   .off(eventName, handler) – убирает функцию из списка обработчиков.

    3   .trigger(eventName, ...args) – генерирует событие: все назначенные обработчики из _eventHandlers[eventName] вызываются,
         и ...args передаются им в качестве аргументов. */
// Создадим класс
class Menu {
    choose(value) {
      this.trigger("select", value);
    }
}
// Добавим примесь с методами для событий
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// Добавить обработчик, который будет вызван при событии "select":
// menu.on("select", value => alert(`Выбранное значение: ${value}`));
let sel1 = value => alert(`Выбранное значение: ${value}`);
menu.on("select", sel1);

// Генерирует событие => обработчик выше запускается и выводит:
menu.choose("123"); // Выбранное значение: 123

// menu.off("select", value => alert(`Выбранное значение: ${value}`));
menu.off("select", sel1);

menu.choose("123"); // 

/*
Теперь если у нас есть код, заинтересованный в событии "select", то он может слушать его с помощью menu.on(...).

А eventMixin позволяет легко добавить такое поведение в любой класс без вмешательства в цепочку наследования.
*/
alert("End");

