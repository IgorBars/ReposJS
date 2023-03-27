/* JawaScript -  «было ли сообщение прочитано?» 

*/
'use strict';

alert("Start weakMap_messages_WeakMapSet");

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readSet = new WeakSet();

function readMess() {   // функция "чтения" сообщений из массива messages
    for(let mess of messages) {
        readSet.add(mess);
    }
    alert(`"чтение" (в readSet)`);
}

readMess(); // "читаем" все (3) сообщения из массива messages

let hello1 = {text: "Hello1", from: "John1"};
messages.push(hello1);// не прочитано (не обновлено)

for(let mess of messages) { // смотрим наличие 4-го "непрочитанного"
    alert(`не прочитанный messages 4шт: ${readSet.has(mess)}`);  // true     true    true    false
}


let hello2 = {text: "Hello2", from: "John2"};
messages.push(hello2);  // добавляем 5-е "непрочитанное" (уже 2 "непрочитанных")

readMess(); //"читаем" все 5 сообщений (3 повторно - пропускаются)

alert(`после readMess() наличие в "прочитанных" hello2 ?:  ${readSet.has(hello2)}`);//True
readSet.add(messages[0]);
alert(`.add-messages[0] ?:  ${readSet.has(messages[0])}`);
messages = [];    // сообщения в оригинале стерты
hello1 = null;    // сообщения в оригинале стерты
hello2 = null;    // сообщения в оригинале стерты 

alert(`.null-hello1 ?: ${readSet.has(hello1)}`); // false -пров отсутств в readSet
alert(`.null-hello2 ?: ${readSet.has(hello2)}`); // false
alert(`.null-messages[0] ?: ${readSet.has(messages[0])}`);// false

alert("End");
