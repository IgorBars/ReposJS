/* JawaScript - Ex1_data-widgetName_Atributy&SvojstvaDocument
Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение:

  <body>
    <div>Ha-Ha</div>
    <div data-widget-name="menu">Choose the genre</div>
    
    <script src="Ex1_data-widgetName_Atributy&SvojstvaDocument.js"></script>
  </body>
*/

'use strict';
alert("Start Ex1_data-widgetName_Atributy&SvojstvaDocument");



// let divElem = document.querySelector('[data-widget-name]');
let divElem = document.body.querySelector('div[data-widget-name]');

alert(divElem.outerHTML);    // <div data-widget-name="menu">Choose the genre</div>

alert(divElem.dataset.widgetName);  // menu   (как свойство dataset)

alert(divElem.getAttribute('data-widget-name'));  // menu   (как атрибут)



alert("End");