/* JawaScript - когда сообщение было прочитано? сохранить дату, и она должна
 исчезнуть из памяти при удалении «сборщиком мусора» сообщения. */
'use strict';

alert("Start weakMap_messagesTime_MapSetData");

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

function readMess() {                              // функция "чтения" сообщений из массива messages
    for(let mess of messages) {
        readMap.set(mess, new Date());
    }
}

readMess();                                          // "читаем" все сообщения из массива messages

let hello1 = {text: "Hello1", from: "John1"};
messages.push(hello1);                              // не прочитано (не обновлено)

for(let mess of messages) {                         // смотрим 4 сообщения messages на состояние "прочитанного"
    alert(`readMap.has 3+1шт: ${readMap.has(mess)}`); // true   true    true    false
    alert(`readMap.get 3+1шт: ${readMap.get(mess)}`); // Date   Date    Date    undefined
}


let hello2 = {text: "Hello2", from: "John2"};
messages.push(hello2);                          // добавляем 5-е "непрочитанное" (уже 2 "непрочитанных")

readMess();                                     //"читаем" все 5 сообщений (3 повторно - пропускаются)
alert(`.push()+readMess() наличие в "прочитанных" hello2 ?:  ${readMap.has(hello2)}`); //True

alert(`.has-messages[0] ?:  ${readMap.has(messages[0])}`);   // true
alert(`.get-messages[0] ?:  ${readMap.get(messages[0])}`);  // Date
messages = [];    // сообщения в оригинале стерты
hello1 = null;    // сообщения в оригинале стерты
hello2 = null;    // сообщения в оригинале стерты 

alert(`отсутств в readSet -hello1 ?: ${readMap.has(hello1)}`);          // false -пров отсутств в readSet
alert(`отсутств в readSet -hello2 ?: ${readMap.has(hello2)}`);           // false
alert(`отсутств в readSet -messages[0] ?: ${readMap.has(messages[0])}`);  // false

alert("End");
