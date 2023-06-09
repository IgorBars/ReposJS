/* JawaScript - 4_surrogate_UnicodРазное                «суррогатная пара»

Cимволы, требующие более 2 байт, кодируются парой 2-байтовых символов, которые называются «суррогатной парой».

Технически, суррогатные пары также можно определить по их кодам: если символ имеет код в интервале 0xd800...0xdbff, 
то он является первой частью суррогатной пары. Следующий символ (вторая часть) должен иметь код в интервале 0xdc00...0xdfff. 
Эти интервалы зарезервированы стандартом исключительно для суррогатных пар.

Побочным эффектом является то, что длина таких символов равна 2:
*/
'use strict';
alert("Start 4_surrogate_UnicodРазное");


alert( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
alert( '😂'.length ); // 2, FACE WITH TEARS OF JOY
alert( '𩷶'.length ); // 2, редкий китайский иероглиф


alert("End");

