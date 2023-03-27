/* JawaScript - Ex1_calculator_generalOninput_changeInputForms               Депозитный калькулятор

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
alert("Start Ex1_calculator_generalOninput_changeInputForms");



let form = document.forms.calculator;                                 // form

let maneyBefore = document.getElementById('money-before');            // td 'money-before'
let maneyAfter = document.getElementById('money-after');              // td 'money-after'
let divGreen = document.getElementById('height-after');               // div 'height-after'

// form.money.oninput = form.months.onchange = form.interest.oninput = getCalculat;
form.oninput = getCalculat;

function getCalculat() {
  let initial = +form.money.value;                                    // (заданное значение суммьі вклада) form.money == form.elements.money
  // if (!initial) return;                                               // не реагирует на пустое-значение/0

  let years = +form.months.value / 12;                                // (заданное значение периода вклада)
  // if (!years) return;

  let interest = +form.interest.value / 100;                          // (заданное значение процентной ставки вклада)
  // if (!interest) return;

  let result = Math.round(initial * (1 + interest) ** years);         // результирующая абсолютная величина суммьі вклада
  let relHeight = Math.round(result * 100 / initial) + "px";          // результирующая относительная величина суммьі вклада
  
  maneyBefore.innerHTML = initial;
  maneyAfter.innerHTML = result;
  divGreen.style.height = relHeight;
}

getCalculat();



alert("End");