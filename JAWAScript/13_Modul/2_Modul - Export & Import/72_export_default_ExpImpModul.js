/* JawaScript - 72_export_default_ExpImpModul            export default 
Так как в файле может быть максимум один export default, то экспортируемая сущность не обязана иметь имя.
*/
'use strict';
alert("Start 72_export_default_ExpImpModul"); 


export default class {                                      // у класса нет имени
    constructor() { /*...*/ }
}



// export default function(user) {                           // у функции нет имени
//     alert(`Hello, ${user}!`);
// }



//                                                          // экспортируем значение, не создавая переменную
// export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];




// пришлось закомментировать, потому что может быть только один export default на файл          (!!!)

alert("End");

