/* JawaScript - String_Data */
'use strict';

alert("Start String_Data");

function sum(a, b) {
    return a + b;
  }
                //использ обратных кавычек
  alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3. 


let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // список гостей, состоящий из нескольких строк


//Свойство length содержит длину строки:
alert(`"My\\n".length: ${`My\n`.length}`); // 3

let k = 0;
let str= "My\n";
alert(`str[0]: ${str[0]}`); //  M

for (let i of str) {
    
    alert(`str[${k}] = ${i}`);
    k++;
}

alert("End");
