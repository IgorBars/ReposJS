/* JawaScript - 9_dataset2_Atributy&SvojstvaDocument     -пользовательские атрибутьі для разрабов

Все атрибуты, начинающиеся с префикса «data-», зарезервированы для использования программистами. 
    Они доступны в свойстве dataset.

Например, если у elem есть атрибут "data-about", то обратиться к нему можно как elem.dataset.about.

Атрибуты, состоящие из нескольких слов, к примеру data-order-state, становятся свойствами, 
записанными с помощью верблюжьей нотации: dataset.orderState.

<div id="order" class="order" data-order-state="new">
    A new order.
</div>
*/

'use strict';
alert("Start 9_dataset2_Atributy&SvojstvaDocument");


// чтение
alert(order.dataset.orderState); // new

// изменение
order.dataset.orderState = "pending"; // (*)






//Итого
// Атрибуты – это то, что написано в HTML.
// Свойства – это то, что находится в DOM-объектах.
alert("End");