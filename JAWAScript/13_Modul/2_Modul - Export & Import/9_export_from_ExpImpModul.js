/* JawaScript - 9_export_from_ExpImpModul            export ... from ...
Синтаксис «реэкспорта» export ... from ... позволяет импортировать что-то и тут же экспортировать, возможно под другим именем
*/
'use strict';
alert("Start 9_export_from_ExpImpModul"); 


export {sayHi} from './say.js.js'; // реэкспортировать sayHi

export {default as User} from './user.js.js'; // реэкспортировать default


alert("End");

