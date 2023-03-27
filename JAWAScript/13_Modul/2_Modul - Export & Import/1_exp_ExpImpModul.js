/* JawaScript - 1_exp_ExpImpModul        Экспорт до объявления

Обратите внимание, что инструкции import/export не работают внутри блоков кода {...}.   (!!!)
*/
'use strict';
alert("Start _ModulVved"); 


// экспорт массива
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// экспорт константы
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// экспорт класса
export class User {
  constructor(name) {
    this.name = name;
  }
}




alert("End");

