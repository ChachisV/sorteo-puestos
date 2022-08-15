let modulos = [];
let min = 1;
let max = 0;
const botonModulos = document.querySelector("#botonModulos");
const seccionModulos = document.querySelector(".section-modulos");
const moduloFinal = document.querySelector(".modulos-finales")


function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min + 1)+min);
}


function escogerModulo(){
    let modulo = aleatorio(min, max);
    let consultor = document.querySelector(".input-consultor").value;

    

    if(!modulos.includes(modulo)){     
      
        modulos.push(modulo); 
       
       const resultadoModulo = document.createElement("p");
       resultadoModulo.innerText = (consultor + " en el módulo ");

       const moduloElegido = document.createElement("p");
       moduloElegido.classList.add("modulo-final");
       moduloElegido.innerText = (modulo)

       moduloFinal.append(resultadoModulo, moduloElegido);
          
      
    }else{
        escogerModulo(consultor);
    }
      
}


// <section>
// <p>Nombre del Consultor</p>
// <input type="text">
// <button>Elegir Módulo</button>
// </section>


function eleccionModulos(){
   
    const nombreConsultor = document.createElement("p");
    nombreConsultor.innerText = "Nombre del consultor";

    const inputConsultor = document.createElement("input");
    inputConsultor.classList.add("input-consultor");
    inputConsultor.setAttribute("type", "text")

    const botonElegirModulo = document.createElement("button");
    botonElegirModulo.innerText = "Elegir Módulo";
    botonElegirModulo.classList.add("boton-elegir-modulo");
    botonElegirModulo.addEventListener("click", escogerModulo);

    seccionModulos.append(nombreConsultor, inputConsultor, botonElegirModulo);


    
    return max = document.querySelector("#valorModulos").value;


}


botonModulos.addEventListener("click", eleccionModulos);


// escogerModulo("juan");
// escogerModulo("sofi");
// escogerModulo("jaime");
// escogerModulo("aleja");
// escogerModulo("karol");
// escogerModulo("lulieth");
// escogerModulo("mayra");
// escogerModulo("karla");
// escogerModulo("clarid");
// escogerModulo("nicolas");
// escogerModulo("edwin");
// escogerModulo("carlos");
// escogerModulo("diana");
// escogerModulo("jhonatan");
// escogerModulo("victor");

