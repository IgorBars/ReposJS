/* JawaScript - 3_AsyncGenIterator_AsyncGnrIterGenerator

                                      ОБ'ЄКТ ІТЕРОВАНИЙ АСИНХРОННИМ ГЕНЕРАТОРОМ

Так як звичайна практика ітерувати об'єкт не просто ітератором, а генератором-ітератором,
розглянемо асинхронний генератор-ітератор.

Генератор-ітератор *[Symbol.iterator] будет реализовать логику для перечисления значений.

Если хотим добавить асинхронные действия в генератор-ітератор, нужно заменить генератор-ітератор *[Symbol.iterator] 
на асинхронный генератор-ітератор *[Symbol.asyncIterator]:
*/
'use strict';
alert("Start 3_AsyncGenIterator_AsyncGnrIterGenerator");


let range = {
    from: 1,
    to: 5,
                                      // АСИНХРОННИЙ ГЕНЕРАТОР-ІТЕРАТОР
    async *[Symbol.asyncIterator]() { // то же, что и [Symbol.asyncIterator]: async function*()
      for(let value = this.from; value <= this.to; value++) {
  
        // пауза между значениями, ожидание
        await new Promise(resolve => setTimeout(resolve, 1000));
  
        yield value;  // чергове значення буде сформоване після завантаження і обробки коду з мережі (напр URL аватара)
      }
    }
};

// переберемо об'єкт, ітерований асинхронним генератором, у асинхронному циклі  for await..of
(async () => {
  
    for await (let value of range) {
      alert(value); // 1, потом 2, потом 3, потом 4, потом 5
    }
  
})();


alert("End");

