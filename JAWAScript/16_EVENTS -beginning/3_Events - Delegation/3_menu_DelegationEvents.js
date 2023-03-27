/* JawaScript - 3_menu_DelegationEvents               Делегирование

Принцип делегирования:
(подходит для однотипной обработки множества собьітий) собьітия от "прослушиваемьіх" єлементов вспльівают и перехватьіваются обработчиком на общем предке.
Благодаря инфе о целевом єлементе event.target в обработчике идентифицируется єлемент, на котором произошло собьітие.
(позволяет не городить сотни обработчиков для КАЖДЛОГО єлемента)

применение делегирования.

Например, нам нужно сделать меню с разными кнопками: «Сохранить (save)», «Загрузить (load)», «Поиск (search)» и т.д. 
И есть объект с соответствующими методами save, load, search… Как их состыковать?

Мы можем добавить один обработчик для всего меню и атрибуты data-action для каждой кнопки в соответствии с методами, 
которые они вызывают.

<div id="menu">
    <button data-action="save">Сохранить</button>
    <button data-action="load">Загрузить</button>
    <button data-action="search">Поиск</button>
</div>
*/

'use strict';
alert("Start 3_menu_DelegationEvents");

class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {    // имя метода повторяет значение атрибута (data-action="save")
      alert('сохраняю');
    }

    load() {
      alert('загружаю');
    }

    search() {
      alert('ищу');
    }

    onClick(event) {    // handler
      let action = event.target.dataset.action; // save  (data-action="save"), ...
      if (action) {
        this[action](); // название атрибута вставляется в переменную как имя метода
      }
    }
}

let menu = document.getElementById('menu');
new Menu(menu);


// Обратите внимание, что метод this.onClick в строке, отмеченной звёздочкой (*), 
// привязывается к контексту текущего объекта this. Это важно, т.к. иначе this внутри него будет ссылаться 
// на DOM-элемент (elem), а не на объект Menu, и this[action] будет не тем, что нам нужно.

alert("End");