/* JawaScript - 2_exp_ExpImpModul                Экспорт отдельно от объявления    
*/
'use strict';
alert("Start 2_exp_ExpImpModul"); 



// 📁 say.js
function sayHi(user) {
    alert(`Hello, ${user}!`);
}
  
function sayBye(user) {
    alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // список экспортируемых переменных




alert("End");

