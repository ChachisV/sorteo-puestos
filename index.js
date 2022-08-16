let modulos = [];
let min = 1;
let max = 0;
const cuantosModulos = document.querySelector(".cuantosModulos");
const botonModulos = document.querySelector("#botonModulos");
const seccionConsultores = document.querySelector(".section-consultores");
const moduloFinal = document.querySelector(".modulos-finales");

function esconderCuantosModulos(){
    cuantosModulos.classList.add("inactive");
    cuantosModulos.classList.remove("cuantosModulos");
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min + 1)+min);
}



function escogerModulo(){
    let modulo = aleatorio(min, max);
    let consultor = document.querySelector(".input-consultor").value;
    
    if(modulos.length >= max){
        alert("ya están ocupados todos los módulos");
    }else {
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

  
      
}



function eleccionModulos(){
   
    esconderCuantosModulos();

    const nombreConsultor = document.createElement("p");
    nombreConsultor.innerText = "Nombre del consultor";
    nombreConsultor.classList.add("tittle-consultor");

    const inputConsultor = document.createElement("input");
    inputConsultor.classList.add("input-consultor");
    inputConsultor.setAttribute("type", "text")

    const botonElegirModulo = document.createElement("button");
    botonElegirModulo.innerText = "Elegir Módulo";
    botonElegirModulo.classList.add("boton-elegir-modulo");
    botonElegirModulo.addEventListener("click", escogerModulo);
    

    seccionConsultores.append(nombreConsultor, inputConsultor, botonElegirModulo);

    
    
    return max = document.querySelector("#valorModulos").value;


}


botonModulos.addEventListener("click", eleccionModulos);



