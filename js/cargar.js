//keys_component.js
let teclas = [
    "AC", "(", ")", "C",
    '<img src="./img/delete.png" class="delete">',
    7, 8, 9, "/", "√",
    4, 5, 6, "*","x²",
    1,2,3,"-","=",
    "%",0,".","+"
];

function cargar_teclas(){

    //Se selecciona el div de html
    let mostrar_teclado= document.querySelector(".teclado");

     
    teclas.forEach((i)=>{ //Se realiza con forEach con el array

        let estructura = document.createElement("div"); //Se crea un div vacío
        estructura.innerHTML = i; //Se le asigna o inserta a el div creado la variable i
        estructura.classList.add("key_item"); //Se crea una clase y se agrega a el div


        //forEach para funcionalidad de teclas
        teclas.forEach((i2,indice)=>{

            //Si i es igual a índice agregar una clase a estructura (div)
            if(i==indice){
                estructura.classList.add("tecla_1")
            }
            else{
                null
            }
       });

       //Si i es igual a la tecla "=" (como una calculadora), agregar
       //una clase, si no, no se hace nada
        if(i=="="){
            estructura.classList.add("tecla_2");
        }else{
            null
        }
        

        mostrar_teclado.appendChild(estructura); 
        //Se insertan a la variable mostrar_teclado (el cuál se llama teclado en el html de tipo div)
        // las condiciones declaradas arriba a estructura, el div creado desde js para "sobreponer"
    });
    
}