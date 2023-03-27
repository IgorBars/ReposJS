/* JawaScript - Proxy_Разное
Отключаемый (revocable) прокси – это прокси,
 который может быть отключён вызовом специальной функции revoke().
*/
'use strict';

alert("Start _14revokeWeakMap3_РазноеProxy");

let revokes = new WeakMap();

let object = {
  data: "Важные данные"
};

let {proxy, revoke} = Proxy.revocable(object, {});

revokes.set(proxy, revoke);

// ..позже в коде..
revoke = revokes.get(proxy);

revoke();

try {
    alert(proxy.data); // Ошибка (прокси отключён)
} catch(er) {
    alert(er.message);
}



alert("End");

