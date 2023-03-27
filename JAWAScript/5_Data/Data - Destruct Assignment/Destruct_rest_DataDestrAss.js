/* JawaScript - Деструктурирующее присваивание 
                Деструктуризация массива 
    присваивание переменным значений остаточньіх параметров из массива               
*/

'use strict';

alert("Start Destruct_rest_DataDestrAss");


let [...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];


// Обратите внимание, что `rest` является массивом.
alert(rest[0]);     // Julius
alert(rest[1]);     // Caesar
alert(rest[2]);     // Consul
alert(rest[3]);     // of the Roman Republic
alert(rest.length); // 4


alert("End");
