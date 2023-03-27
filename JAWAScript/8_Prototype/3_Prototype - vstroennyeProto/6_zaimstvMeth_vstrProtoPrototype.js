/* JawaScript - 6_zaimstvMeth_vstrProtoPrototype

                                    Запозичення методу
*/
'use strict';
alert("Start 6_zaimstvMeth_vstrProtoPrototype");


let obj = {                         // об'єкт псевдомасив
    0: "Hello",
    1: "world!",
    length: 2,
};

obj.join = Array.prototype.join;    // Записуємо властивість-метод массиву із прототипу массиву у властивість об'єкту

alert( obj.join(',') ); // Hello,world!

let descriptors = Object.getOwnPropertyDescriptors(obj);    // тепер метод join є у властивостях obj
alert(JSON.stringify(descriptors, null, 2));



alert("End");

