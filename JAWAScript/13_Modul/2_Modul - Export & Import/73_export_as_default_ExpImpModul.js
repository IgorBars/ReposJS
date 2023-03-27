/* JawaScript - 73_export_as_default_ExpImpModul            export as default 

*/
'use strict';
alert("Start 73_export_as_default_ExpImpModul"); 


function sayHi(user) {
    alert(`Hello, ${user}!`);
}

// то же самое, как если бы мы добавили "export default" перед функцией
export {sayHi as default};


alert("End");

