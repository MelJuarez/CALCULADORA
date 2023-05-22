

    //Se llama a la función que inserta las teclas
    cargar_teclas();

   /* let totales = document.querySelector("#total"); //total tiene un valor input

    function agregar(){
        let caracter = this.innerHTML;
        totales = document.querySelector("#total");
        totales.value = totales.value + caracter;
    }

    function reinicio(){
        totales = document.querySelector("#total");
        totales.value = "";
    }

    function reinicio_total(){
        let totales_a = document.querySelector("#total");
        totales_a.value = 0;
        document.querySelector(".record").innerHTML = "";
    }

    function borrar(){
        var content = totales.value;
        var nuevoValor = content.slice(0, -1);
        totales.value = nuevoValor;
    }

    function calculate(){
        operation = document.querySelector("#total");
        let r = eval(operation.value);
        set_record(operation.value,r);
        operation.value = r;
    }



    let keys_dom = document.querySelectorAll(".key_item");

    keys_dom.forEach((keys_content) => {
        let content = keys_content.innerHTML;

        if (content == "C") {
            keys_content.addEventListener("click", reinicio);
        } else if (content == "=") {
            keys_content.addEventListener("click", calculate);
        } else if (content == "AC") {
            keys_content.addEventListener("click", reinicio_total);
        } else if (content == '<img src="./img/delete.png" class="delete">') {
            keys_content.addEventListener("click", borrar);
        } else {
            keys_content.addEventListener("click", agregar);
        }
    });
*/

let totales = document.querySelector("#total"); //total tiene un valor input

    function agregar(){
        let caracter = this.innerHTML;
        totales = document.querySelector("#total");
        totales.value = totales.value + caracter;
    }

    function reinicio(){
        totales = document.querySelector("#total");
        totales.value = "";
    }

    function reinicio_total(){
        let totales_a = document.querySelector("#total");
        totales_a.value = 0;
        document.querySelector(".record").innerHTML = "";
    }

    function borrar(){
        var contenido = totales.value;
        var nuevoValor = contenido.slice(0, -1);
        totales.value = nuevoValor;
    }

    function calculate() {
    let operation = document.querySelector("#total");
    let i = eval(operation.value);
    set_record(operation.value, i);
    operation.value = r;
    actualizarResultados();
    }

    //updateCurrentResult();
    function actualizarResultados() {
    let records_box_DOM = document.querySelector(".record");
    let resultSpans = records_box_DOM.querySelectorAll(".result");
    let UltimoResultadoSpan = resultSpans[resultSpans.length - 1];

    if (UltimoResultadoSpan) {
        let result = UltimoResultadoSpan.innerText;
        //let operation = UltimoResultadoSpan.previousSibling.innerText;

        document.querySelector("#total").value = result;
    } else {
        document.querySelector("#total").value = "";
    }
    }

    
    let keys_dom = document.querySelectorAll(".key_item");

    keys_dom.forEach((keys_content) => {
    let content = keys_content.innerHTML;

    if (content == "C") {
        keys_content.addEventListener("click", reinicio);
    } else if (content == "=") {
        keys_content.addEventListener("click", calculate);
    } else if (content == "AC") {
        keys_content.addEventListener("click", reinicio_total);
    } else if (content == '<img src="./img/delete.png" class="delete">') {
        keys_content.addEventListener("click", borrar);
    } else {
        keys_content.addEventListener("click", agregar);
    }
    });

