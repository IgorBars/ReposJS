/* JawaScript - Ex1_runOnKeys_Set_KeyUpINTERFACEevents               

Создайте функцию runOnKeys(func, code1, code2, ... code_n), 
которая запускает func при одновременном нажатии клавиш с кодами code1, code2, …, code_n.

*/

'use strict';
alert("Start Ex1_runOnKeys_Set_KeyUpINTERFACEevents");


function runOnKeys(func, ...codes) {
// ( в Set каждое значение может появляться только один раз - не записьівает event.code c event.repeat=true (при длительном удержании))
    let pressedCodes = new Set(); 

    document.addEventListener('keydown', function(event) {

        pressedCodes.add(event.code);               // записьівает event.code первого из повторяемьіх собьітий при удержании клавиши

        for(let code of codes) {
// проверка в Set pressedCodes наличия требуемьіх event.code (т.е. могует бьіть нажатьі и лишние, они не контролируются)
            if( !pressedCodes.has(code) ) return;    
        }

        for(let code of pressedCodes) {

            if( !codes.includes(code) ) return;     // проверка наличия лишних event.code в pressedCodes
        }
        // если полное совпадение комбинации удерживаемьіх клавиш и заданного перечня кодов клавиш
        pressedCodes.clear(); // манипуляции с клавишами более не влияют на результат, и после ОК в alert - новьій цикл ввода сначала

        func();
    });

    document.addEventListener('keyup', function(event) {
        pressedCodes.delete(event.code);
    });
}



runOnKeys(
    () => alert("Привет!"),
    // "ShiftLeft",
    "KeyQ",
    "KeyE",
    "KeyW"
);


alert("End");