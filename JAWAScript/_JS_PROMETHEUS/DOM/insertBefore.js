(function() {

    let child = document.createElement("li"); // <li><li/>

    let text = document.createTextNode("Fifth item"); // "Fifth item"

    child.appendChild(text);  // <li>Fifth item<li/>
    
    child.style.fontWeight = "bold"; child.style.color = "red";

    let idEl = document.getElementById("list");

    let liArr = document.getElementsByTagName("li");

    idEl.insertBefore(child, liArr[1]);

})();

