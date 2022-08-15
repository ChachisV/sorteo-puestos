let modulos = [];
let min = 1;
let max = 0;
let consultor = "";
const botonModulos = document.querySelector("#botonModulos");



function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min + 1)+min);
}


function escogerModulo(consultor){
    let modulo = aleatorio(min, max);
    

    if(!modulos.includes(modulo)){
       modulos.push(modulo); 
       

       return alert(consultor + " en el módulo " + modulo);
    }else{
        escogerModulo(consultor);
    }
}

function seccionModulos(){
    let max = document.querySelector("#valorModulos").value;
    
}


botonModulos.addEventListener("click", seccionModulos);


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
// escogerModulo("lina");

