/* JawaScript - 6_select_SvstvMetodsForms               

Элементы <option> имеют свойства:
  - option.selected   - Выбрана ли опция.
  - option.index      - Номер опции среди других в списке <select>.
  - option.value      - Значение опции.
  - option.text       - Содержимое опции (то, что видит посетитель).


Элемент <select> имеет 3 важных свойства:
  - select.options – коллекция из подэлементов <option>,
  - select.value – значение выбранного в данный момент <option>,
  - select.selectedIndex – номер выбранного <option>.

Они дают три разных способа установить значение в <select>:
  - Найти соответствующий элемент <option> и установить в option.selected значение true.
  - Установить в select.value значение нужного <option>.
  - Установить в select.selectedIndex номер нужного <option>.

<select id="select">
  <option value="apple">Яблоко</option>
  <option value="pear">Груша</option>
  <option value="banana">Банан</option>
</select>
*/

'use strict';
alert("Start 6_select_SvstvMetodsForms");


// все три строки делают одно и то же
select.options[2].selected = true;
select.selectedIndex = 2;
select.value = 'banana';


alert("End");