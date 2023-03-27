/* JawaScript - 4_nasledObjSpecies_builtInExtendsClasses
                                    Расширение встроенных классов
 */
'use strict';
alert("Start 4_nasledObjSpecies_builtInExtendsClasses"); 


class PowerObj extends Object { // клас для створення об'єкта-псевдомасива
    0 = "Aple";
    1 = "Tomato";
    2 = "Potato";
    length = 3;

    isEmpty() {                    // расширяем класс Object методом isEmpty
      return this.length === 0;
    }
      // встроенные методы коллекции (ВОЗВРАЩАЮЩИЕ КОЛЛЕКЦИЮ!) будут использовать этот метод как конструктор      !!!
//   static get [Symbol.species]() {
//     return Object;
//   }
}

let objPsArr = new PowerObj();

alert(objPsArr);                // [object Object]

alert(objPsArr["0"]);           // Aple          (строчное свойство объекта цифрами в записи через точку не работает)

for(let char in objPsArr)
alert("objPsArr: " + char);     // 0    1   2   length

alert("objPsArr.length: " + objPsArr.length);   // 3


objPsArr.filter = Array.prototype.filter;

alert(objPsArr.isEmpty());            // false       (работает расширенньій метод PowerSet)

let filteredObjPsArr = objPsArr.filter((item, index) => index >= 1 );

alert(filteredObjPsArr);            // Tomato,Potato    (0: "Aple", length: 3   відфільтровані)

alert(typeof(filteredObjPsArr));    // object

for(let char in filteredObjPsArr)
alert("filteredObjPsArr: " + char + "" + filteredObjPsArr[char]);


// alert(filteredObjPsArr.isEmpty());    // false   (работает Symbol.species,  расширенньій метод PowerSet не работает )






alert("End");

