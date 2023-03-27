/* JawaScript - Ex1_populate_scrollINTERFACEevents               Бесконечная страница

Создайте бесконечную страницу. Когда посетитель прокручивает её до конца, 
она автоматически добавляет текущие время и дату в текст (чтобы посетитель мог прокрутить ещё).

Таким образом, «прокрутка до конца» должна означать, что посетитель находится на расстоянии не более 100px от конца документа.

P.S. В реальной жизни мы можем захотеть показать «больше сообщений» или «больше товаров».

Документ представлен тегом <html> (и содержится в нём же), который доступен как document.documentElement
Его координаты относительно окна браузера:  document.documentElement.getBoundingClientRect()
Свойство bottom будет координатой нижней границы документа относительно окна.

Высота окна:  document.documentElement.clientHeight
*/

'use strict';
alert("Start Ex1_populate_scrollINTERFACEevents");


// let i = 0;
function populate() {
    // while(i < 40) {
    while(true) {
      // нижняя граница документа html
      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;   // визначаємо нове значення на кожній ітерації

      // если добавилось столько записей, что нижняя граница документа находится ниже нижнего края окна на более 100px, вьійти из цикла
      // прокручивая, приближаем нижнюю границу документа к нижнему краю окна меньше 100px
      if (windowRelativeBottom > document.documentElement.clientHeight + 10) break;        // вьійти из цикла (до следующего собьітия scroll)
        // добавим больше данных
        document.body.insertAdjacentHTML("beforeend", `<p>Дата: ${new Date()}</p>`);
      
    //   i++;
    }
}

window.addEventListener('scroll', populate);

populate();



alert("End");