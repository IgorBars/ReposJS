/* JawaScript - 7_appendscript_asyncfals_asyncdeferLoadDoc               Динамически загружаемые скрипты c async = false

Мы можем изменить относительный порядок скриптов с «первый загрузился – первый выполнился» на порядок, 
в котором они идут в документе (как в обычных скриптах) с помощью явной установки свойства async в false:

  let script = document.createElement('script');
  script.src = "/article/script-async-defer/long.js";

  script.async = false;

  document.body.append(script);

Например, здесь мы добавляем два скрипта. 
Без script.async=false они запускались бы в порядке загрузки (small.js скорее всего запустился бы раньше). 
Но с этим флагом порядок будет как в документе:

  function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
  }

// long.js запускается первым, так как async=false:

  loadScript("/article/script-async-defer/long.js");
  loadScript("/article/script-async-defer/small.js");
*/

'use strict';
alert("Start 7_appendscript_asyncfals_asyncdeferLoadDoc");

// defer - пионеры, которые всех пропускают
// async - балбесы, которым пофигу, кто где идёт
// обычные скрипты - бабули, которые тормозят всю толпу





alert("End");

