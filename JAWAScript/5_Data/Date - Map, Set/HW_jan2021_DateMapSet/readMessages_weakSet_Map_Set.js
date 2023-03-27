/* JawaScript - readMessages_weakSet Map, Set*/
'use strict';

alert("Start readMessages_weakSet_Map_Set");

let ReadMesSet = new WeakSet();

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"},

  ];

alert("messages[0]: " + messages[0].text);
alert("messages[2]: " + messages[2].text);
alert("messages.length: " + messages.length);

messages.forEach((element, index) => {// добавляем в хранилище прочитанных

    alert(element.text);
    ReadMesSet.add( messages[index] )

  }); 

ReadMesSet.add( messages[0] ); // добавляем "случайно" еще раз
ReadMesSet.add( messages[1] ); // добавляем "случайно" еще раз
ReadMesSet.add( messages[2] ); // добавляем "случайно" еще раз

alert(".has(messages[0]): " + ReadMesSet.has(messages[0]));
alert(".has(messages[2]): " + ReadMesSet.has(messages[2]));

messages.shift();

alert(" после .shift() messages.length: " + messages.length);
alert(" после .shift() messages[0]: " + messages[0].text);


alert(".has(messages[0]): " + ReadMesSet.has(messages[0]));
alert(".has(messages[2]): " + ReadMesSet.has(messages[2]));

alert("End");
