/* JawaScript - 7_select_multiple_SvstvMetodsForms               

В отличие от большинства других элементов управления, <select> позволяет нам выбрать несколько вариантов одновременно, 
если у него стоит атрибут multiple. Эту возможность используют редко, но в этом случае для работы со значениями необходимо 
использовать первый способ, то есть ставить или удалять свойство selected у подэлементов <option>.

Коллекцию єлементов option можно получить как select.options

<select id="select" multiple>
  <option value="blues" selected>Блюз</option>
  <option value="rock" selected>Рок</option>
  <option value="classic">Классика</option>
</select>
*/

'use strict';
alert("Start 7_select_multiple_SvstvMetodsForms");


// получаем все выбранные значения из select с multiple
let selected = Array.from(select.options)     // Массив из коллекции єлементов option
  .filter(option => option.selected)          // Отфильтровать коллекцию єлементов option.selected
  .map(option => option.value);               // получить значение свойства value для каждого

alert(selected); // blues,rock


alert("End");