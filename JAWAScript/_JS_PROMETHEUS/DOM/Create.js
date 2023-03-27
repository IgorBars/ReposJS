// (function() {

//     let ulChild = document.createElement("li"); // createElement - створення нового тега

//     let ulChildText = document.createTextNode("Fifth item"); // createTextNode - створення тексту (string)

//     ulChild.appendChild(ulChildText);  // appendChild - додавання дочірнього елементу у батьківський

//     let idEl = document.getElementById("list");

//     idEl.appendChild(ulChildApp);

// })();

(function() {

    let child = document.createElement("li"); // <li><li/>

    let Text = document.createTextNode("Fifth item"); // "Fifth item"

    child.appendChild(Text);  // <li>Fifth item<li/>

    child.style.fontWeight = "bold"; child.style.color = "red";

    
    let idEl = document.getElementById("list");

    idEl.appendChild(child);

})();

