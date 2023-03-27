/* JawaScript - Ex1_return_false_BrowseractionsEvents               
Почему в коде ниже return false не работает?

<script>
  function handler() {
    alert( "..." );
    return false;
  }
</script>

<a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>
*/

'use strict';
alert("Start Ex1_return_false_BrowseractionsEvents");

//<a href="https://w3.org" onclick="return handler()">перехват w3.org</a> 
// function handler() {
//   alert( "..." );
//   return false;
// }


// <a href="https://w3.org" onclick="handler(event)">перехват w3.org</a>
function handler(event) {   // передадим в аргумент обработчика об'ьект собьітия (для возм вьізвать event.preventDefault())
    alert( "..." );
    event.preventDefault();
}


alert("End");