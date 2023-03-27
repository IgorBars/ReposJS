/* JawaScript -  «было ли сообщение прочитано?» 
Проверка заменьі в массиве об'ьектов
*/
'use strict';

alert("Start weakMap_messages2_WeakMapSet");

let messages = [                                                    // массив об'ьектов
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readSet = new WeakSet();                                    // коллекция прочтенньіх (скопированньіе ссьілки об'ьектов messages)

function readMess() {                                          // функция "чтения" сообщений из массива messages в readSet
    for(let mess of messages) {
        readSet.add(mess);
    }
}

readMess();                                                  // "читаем" все (3) сообщения из массива messages в readSet
for(let mess of messages) {                                  // проверяем состояние 3-х (на прочитанность)
    alert(`прочитанный messages/readSet 3шт: ${readSet.has(mess)}`);  // true     true    true
}

messages.shift();                                                // удаляем 1-е сообщение из массива messages
alert(`после messages.shift(): наличие в readSet messages[0]?:  ${readSet.has(messages[0])}`);//true
alert(`после messages.shift(): наличие в readSet messages[1]?:  ${readSet.has(messages[1])}`);//true
alert(`после messages.shift(): наличие в readSet messages[2]?:  ${readSet.has(messages[2])}`);//false


messages.unshift({text: "Hello", from: "Alex"});                 // добавляем 1-е сообщение в массив messages вместо удаленного
for(let mess of messages) {                                      // проверяем состояние 3-х (на прочитанность)
    alert(`после заменьі: НЕпрочитанный messages/readSet 1+2шт: ${readSet.has(mess)}`);  // false     true    true
}


readMess();                                                      //"читаем" все 3 сообщений (2 и 3 повторно - пропускаются)
for(let mess of messages) {                                      // проверяем состояние 3-х (на прочитанность)
    alert(`после заменьі: прочитанный messages/readSet 3шт: ${readSet.has(mess)}`);  // true     true    true
}

messages = [];    // сообщения в оригинале стерты

// проверяем наличие в прочитанньіх
alert(`стерто в messages: readSet.has(messages[0])?: ${readSet.has(messages[0])}`);  // false
alert(`стерто в messages: readSet.has(messages[1])?: ${readSet.has(messages[1])}`);  // false
alert(`стерто в messages: readSet.has(messages[2])?: ${readSet.has(messages[2])}`);  // false

alert("End");
