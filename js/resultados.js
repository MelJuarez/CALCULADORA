//records_components.js
/*function set_record(operation, result){
    let item_record = operation + "=\t" + result;
    let records_box_DOM = document.querySelector(".record");
    records_box_DOM.innerHTML += `
        <li>
            <span > ${operation} </span>
            <span class="equal-sign"> = </span>
            <span class="result"> ${result} </span>
        </li>`;
    records_box_DOM.scrollTop = records_box_DOM.scrollHeight;
}
*/

function set_record(operation, result) {
    let item_record = operation + "=\t" + result;
    let records_box_DOM = document.querySelector(".record");
  
    let listItem = document.createElement("li");

    let operationSpan = document.createElement("span");
    operationSpan.innerText = operation;

    let equalSignSpan = document.createElement("span");
    equalSignSpan.classList.add("equal-sign");
    equalSignSpan.innerText = "=";

    let resultSpan = document.createElement("span");
    resultSpan.classList.add("result");
    resultSpan.innerText = result;
  
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerText = "X";

    deleteButton.addEventListener("click", function () {
    listItem.remove();
    updateCurrentResult();

    });
  
    listItem.appendChild(operationSpan);
    listItem.appendChild(equalSignSpan);
    listItem.appendChild(resultSpan);
    listItem.appendChild(deleteButton);
  
    records_box_DOM.appendChild(listItem);
    records_box_DOM.scrollTop = records_box_DOM.scrollHeight;
  }
  
  function updateCurrentResult() {
    let records_box_DOM = document.querySelector(".record");
    let resultSpans = records_box_DOM.querySelectorAll(".result");
    let lastResultSpan = resultSpans[resultSpans.length - 1];
  
    if (lastResultSpan) {
      let result = lastResultSpan.innerText;
      let operation = lastResultSpan.previousSibling.innerText;
  
      document.querySelector("#total").value = result;
    } else {
      document.querySelector("#total").value = "";
    }
  }


    document.getElementById("download-btn").addEventListener("click", function() { downloadHistorial(); });
  


  function downloadHistorial() {
    let records_box_DOM = document.querySelector(".record");
    let resultSpans = records_box_DOM.querySelectorAll(".result");
    let operationSpans = records_box_DOM.querySelectorAll("span:not(.result):not(.delete-btn)");
  

    let historial = "";
    for (let i = 0; i < resultSpans.length; i++) {
      let operation = operationSpans[i].innerText.trim(); //trim elimina los espacios en blanco 
      let result = resultSpans[i].innerText.trim();
      historial += operation + " = " + result + "\n";
    }
  
    // Crear un elemento de enlace temporal
    const link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(historial);
    link.download = "Historial_Hello!.txt";
    link.style.display = "none";
    
  
    // Agregar el enlace al documento y simular un click para descargar el archivo
    document.body.appendChild(link);
    link.click();
  
    // Eliminar el enlace del documento
    document.body.removeChild(link);
  }
  