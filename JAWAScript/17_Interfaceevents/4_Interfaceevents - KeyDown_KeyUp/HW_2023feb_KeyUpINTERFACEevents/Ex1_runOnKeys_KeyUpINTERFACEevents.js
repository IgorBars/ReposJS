/* JawaScript - Ex1_runOnKeys_KeyUpINTERFACEevents               

Создайте функцию runOnKeys(func, code1, code2, ... code_n), 
которая запускает func при одновременном нажатии клавиш с кодами code1, code2, …, code_n.

*/

'use strict';
alert("Start Ex1_runOnKeys_KeyUpINTERFACEevents");


function runOnKeys(func, ...codes) {

    let events = [];

    document.onkeydown = document.onkeyup = handler;

    function handler(event) {

        events.push(event);

        if( checkEvents(codes, events) ) func();

        events.length = 0;
    };
}


function checkEvents(arrCodes, arrEvents) {                 // с учетом очередности зажатия клавиш

    for(let i = 0; i <= arrCodes.length - 1; i++) {

        if(arrEvents[i].code != arrCodes[i]) return false;
    }
    return true;
}

runOnKeys(
    () => alert("Привет!"),
    // "ShiftLeft",
    "KeyQ",
    "KeyE",
    "KeyW"
);


alert("End");