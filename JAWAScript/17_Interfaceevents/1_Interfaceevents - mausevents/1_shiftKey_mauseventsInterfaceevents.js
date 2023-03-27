/* JawaScript - 1_shiftKey_mauseventsInterfaceevents               

*/

'use strict';
alert("Start 1_shiftKey_mauseventsInterfaceevents");


button.onclick = function(event) {

  let elem = event.target;
  let tooltip = elem.closest('[data-tooltip]');
  let attr = tooltip.dataset.tooltip;   alert(attr);


  // while (elem) {
  //   let attr = elem.dataset.tooltip; alert(attr);
  //   if (attr) return;
  //   elem = elem.parentNode;
  // }

  if (event.altKey && event.shiftKey) {
    alert('Ура!');
  }
};


alert("End");