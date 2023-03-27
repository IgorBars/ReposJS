/* JawaScript - Ex1_1_populate_scrollINTERFACEevents               Бесконечная страница

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
alert("Start Ex1_1_populate_scrollINTERFACEevents");


function populate() {

      // нижняя граница документа html
      let windowRelativeBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop;   // визначаємо нове значення на кожній ітерації
      // alert(windowRelativeBottom); alert(document.documentElement.clientHeight);
      
      // если добавилось столько записей, что нижняя граница документа находится ниже нижнего края окна на более 100px
      // прокручивая, приближаем нижнюю границу документа к нижнему краю окна меньше 100px
      if (windowRelativeBottom <= document.documentElement.clientHeight) {

        document.body.insertAdjacentHTML("beforeend", `<p>Дата: ${new Date()}</p>`);  // добавим больше данных
        
      }
}

window.addEventListener('scroll', populate);

populate();



alert("End");