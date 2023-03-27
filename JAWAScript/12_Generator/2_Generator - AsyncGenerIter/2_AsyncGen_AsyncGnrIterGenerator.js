/* JawaScript - 2_AsyncGen_AsyncGnrIterGenerator        АСИНХРОННАЯ ФУНКЦИЯ-ГЕНЕРАТОР

*/
'use strict';
alert("Start 2_AsyncGen_AsyncGnrIterGenerator");

// function* generateSequence(start, end) {             // синхронна функція-генератор
//     for(let i = start; i <= end; i++)
//     yield i;
// }

// let generator = generateSequence(1, 5);              // повертає генератор

// for (let value of generator) {                       // так як генератор - ітерований об'єкт, його можна перебрати for..of
//     alert(value);
// }


async function* generateSequence(start, end) {            // АААсинхронна функція-генератор
    for(let i = start; i <= end; i++) {
        // await new Promise( resolve => setTimeout(() => resolve(), 1000) );
        await new Promise( resolve => setTimeout(resolve, 1000) );  // async дозволяє використати await
        yield i;
    }
}


// запустимо асинхронний генератор  асинхронним циклом for await..of
(async () => {                                  // обгортаєм у безіменну async-функцію, щоб застосувати  for await..of
    let generator = generateSequence(1, 5);
    for await(let value of generator) {
        alert(value);    // через секунду 1, через секунду  2, ...
    }
  }
)();


// можна запустити асинхронний генератор врукопашну (через виклики.next())
// (async () => {                               
//     let generator = generateSequence(1, 5);
//     let result = await generator.next();         // проміс приймаємо за допомогою await
//     alert(result.value);    // через секунду 1 
//     result = await generator.next();             
//     alert(result.value);    // через секунду  2
//     ...
//   }
// )();


alert("End");

