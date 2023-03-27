/* JawaScript - Ex1_calculator_changeInputForms               Депозитный калькулятор

Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент, а затем рассчитать, 
какая это будет сумма через заданный промежуток времени.

Любое изменение введённых данных должно быть обработано немедленно.

Формула:
  initial: начальная сумма денег
  interest: проценты, например, 0.05 означает 5% в год
  years: сколько лет ждать

let result = Math.round(initial * (1 + interest) ** years);

У HTML-атрибутов есть следующие особенности:                                                  !!!
    - Их имена регистронезависимы (id то же самое, что и ID).
    - Их значения всегда являются строками.
*/

'use strict';
alert("Start Ex1_calculator_changeInputForms");


let result;
let relHeight;

let calculator = document.forms.calculator;
let maneyBefore = document.getElementById('money-before');
let maneyAfter = document.getElementById('money-after');
let divGreen = document.getElementById('height-after');
// divGreen.style.height = '120px';

let elMoney = calculator.elements.money;
let initial = +calculator.elements.money.value;
elMoney.oninput = function() {
  initial = +elMoney.value;
  result = Math.round(initial * (1 + interest) ** years);
  relHeight = Math.round(result * 100 / initial) + "px";
  divGreen.style.height = relHeight;
  maneyBefore.innerHTML = initial;
  maneyAfter.innerHTML = result;
}

let elMonths = calculator.elements.months;
let years = +calculator.elements.months.value / 12;
elMonths.oninput = function() {
  years = +elMonths.value / 12;
  result = Math.round(initial * (1 + interest) ** years);
  relHeight = Math.round(result * 100 / initial) + "px";
  divGreen.style.height = relHeight;
  maneyBefore.innerHTML = initial;
  maneyAfter.innerHTML = result;
}

let elInterest = calculator.elements.interest;
let interest = +calculator.elements.interest.value / 100;
elInterest.oninput = function() {
  interest = +elInterest.value / 100;
  result = Math.round(initial * (1 + interest) ** years);
  relHeight = Math.round(result * 100 / initial) + "px";
  divGreen.style.height = relHeight;
  maneyBefore.innerHTML = initial;
  maneyAfter.innerHTML = result;
}



alert("End");