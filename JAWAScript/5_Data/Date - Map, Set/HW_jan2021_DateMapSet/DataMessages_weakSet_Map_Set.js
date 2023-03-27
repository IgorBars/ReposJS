/* JawaScript - DataMessages_weakSet Map, Set*/
'use strict';

alert("Start DataMessages_weakSet_Map_Set");


let DateMesMap = new WeakMap();

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"},

  ];

alert("messages[0]: " + messages[0].text);
alert("messages[1]: " + messages[1].text);
alert("messages[2]: " + messages[2].text);
alert("messages.length: " + messages.length);

messages.forEach((element, index) => {// добавляем в хранилище прочитанных

    alert(element.text + element.from);
    alert(Object.values(element));//возвр масс значений очередного объекта
    alert(Object.entries(element));//возвр масс паркл-зн очередного объекта
                                   //text,Hello,from,John
    DateMesMap.set( messages[index], new Date() )

  }); 

alert(DateMesMap.get(messages[0]));
alert(DateMesMap.get(messages[1]));
alert(DateMesMap.get(messages[2]));
alert(".has(messages[2]: " + DateMesMap.has(messages[2])); //true
DateMesMap.set( messages[0], new Date(2020, 11, 25) );//  {messages[0]} замещен на Dec
alert(DateMesMap.get(messages[0]));//Dec

messages.shift();//удаляем messages[0], теперь вместо него messages[1] но с индексом [0]

alert(" после .shift() messages.length: " + messages.length);
alert(" после .shift() messages[0]: " + messages[0].text);
alert(DateMesMap.get(messages[0]));//{}Dec удален сборщиком, замещен на {messages[1]} c индексом [0]
alert(".has(messages[2]: " + DateMesMap.has(messages[2])); //false - в weakMap DateMesMap тоже удалена соотв messages[0] позиция

alert("End");
