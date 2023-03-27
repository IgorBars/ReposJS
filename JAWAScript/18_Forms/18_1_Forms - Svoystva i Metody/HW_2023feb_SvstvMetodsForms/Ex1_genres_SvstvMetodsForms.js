/* JawaScript - Ex1_genres_SvstvMetodsForms               
Используя JavaScript:

  - Выведите значение и текст выбранного пункта.
  - Добавьте пункт: <option value="classic">Классика</option>.
  - Сделайте его выбранным.

<select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>Блюз</option>
</select>
*/

'use strict';
alert("Start Ex1_genres_SvstvMetodsForms");


let elSelect = document.getElementById('genres');

//  1)
alert(elSelect.value);                                  // blues  (отсутствует атрибут multiple: простой способ доступа к "вьібранному" option)
alert(elSelect.options[elSelect.selectedIndex].text);   // Блюз

//  2)
let newOption = new Option('Классика', 'classic', false, false);
elSelect.append(newOption);
// elSelect.insertAdjacentElement('beforeend', newOption);

//  3)
// let optionsArr = Array.from(elSelect.options);                        // преобразуем в массив
// let optclassic = optionsArr.find(item => (item.value == 'classic'));  // найти в массиве єлемент со свойством value == 'classic'
// optclassic.selected = true;                                           // 'вьібираем' найденньій єлемент

// elSelect.value = 'classic';                                        //  устаеавливаем для єл select значение св-ва value: 'classic'
// elSelect.selectedIndex = optclassic.index; //  устаеавливаем для єл select значение св-ва selectedIndex: индекс нужного єлемента option 

//  3)
newOption.selected = true; 


alert(elSelect.value);


alert("End");