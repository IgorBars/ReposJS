/* JawaScript - Ex1_populate_scrollHeight_scrollINTERFACEevents               Бесконечная страница

Создайте бесконечную страницу. Когда посетитель прокручивает её до конца, 
она автоматически добавляет текущие время и дату в текст (чтобы посетитель мог прокрутить ещё).

Таким образом, «прокрутка до конца» должна означать, что посетитель находится на расстоянии не более 100px от конца документа.

P.S. В реальной жизни мы можем захотеть показать «больше сообщений» или «больше товаров».

Документ представлен тегом <html> (и содержится в нём же), который доступен как document.documentElement
Его координаты относительно окна браузера:  document.documentElement.getBoundingClientRect()
Свойство bottom будет координатой нижней границы документа относительно окна.

Высота окна:  document.documentElement.clientHeight
Высота окна DIV:                                example.clientHeight
Вьісота документа в окне DIV:                   example.scrollHeight
Вісота скрьітой части документа над окном DIV:  example.scrollTop
Высота окна браузера                            window.innerHeight
*/

'use strict';
alert("Start Ex1_populate_scrollHeight_scrollINTERFACEevents");


function fillPage() {
    
    while (true) {
        if (document.documentElement.scrollHeight - document.documentElement.scrollTop > window.innerHeight) break;
        
        addContent();
    }
}
    
function addContent() {
    document.body.insertAdjacentHTML("beforeend", `
    <p>Date: ${new Date()}</p>
    `);
}

window.addEventListener("scroll", fillPage);
fillPage();



alert("End");