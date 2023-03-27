/* JawaScript 3_OstatParam&OperRasshyr_AdvancPar_FUNCAdv        - Остаточные параметры и оператор расширения */
'use strict';


alert("Start 3_OstatParam&OperRasshyr_AdvancPar_FUNCAdv");


// Остаточные параметры ...rest - при об'ьявлении функции

// Остаточные параметры обозн. через три точки ....rest Буквально это значит: «собери оставшиеся параметры и положи их в массив rest».
function showName(firstName, lastName, ...titles) {// Оставшиеся параметры (после "Юлий", "Цезарь") пойдут в массив titles = [1, 2, 3]
    alert( firstName + ' ' + lastName );    // Юлий Цезарь

    for (let title of titles) alert(title); // 1           2           3  (перебираємо масив)

    alert(titles.join("-"));                // 1-2-3     (застосовуємо метод масива)
}
showName("Юлий", "Цезарь", 1, 2, 3);




// оператор расширения ...arr - при вьізове функции

// оператор расширения ...arr «расширяет» перебираемый объект arr в список аргументов.
let arr = [3, 5, 1];
// щоб використати в параметрах масив, вставляємо його ім'я через ...
alert("Math.max(...arr): " + Math.max(...arr) ); // 5 (оператор "раскрывает" массив в список аргументов)

function sumElem(a, b, c) {
    return a + b + c;
}
// звичайний виклик з зайвими параметрами:
alert( "sumElem(1, 2, 3, 4): " + sumElem(1, 2, 3, 4) );   // 6    (4 отбрасьівается)
// виклик з оператором расширения:
alert( "sumElem(...arr): " + sumElem(...arr) );  // 9    (3 + 5 + 1)





// тобто оператор ... універсальний:
// прописаний у параметрах при об'яві функції:                      отримує список - перетворює його у масив
// вставляємо з назвою масиву у параметрах при виклику функції:     отримує масив - перетворює його у список
let arrelements = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function sumElemEx(...argum) {  // прописуємо як остаточні параметри (...argum) при об'явленні
    let sum = 0;
    for(let element of argum) sum += element;
    return sum;
}
alert("sumElemEx(1, 2, 3, 4, 5, 6, 7, 8, 9, 10): " + sumElemEx(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) );    // 55

 //Використаємо ... тепер як оператор расширения при виклику
alert("sumElemEx(...arrelements): " + sumElemEx(...arrelements) );                                  // 55

alert("sumElemEx(...arrelements, ...arr): " + sumElemEx(...arrelements, ...arr) );                  // 64

alert("End");
