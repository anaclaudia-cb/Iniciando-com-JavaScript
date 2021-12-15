

console.log("\nTrabalhando com loops");


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true; 
let temPassagemComprada = false;
const destino = "Curitiba";


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
}
    contador += 1;
}

console.log("Destino existe:", destinoExiste);

// modelo de for:
// for(let i = 0 ; i <3 ; i++){
//     if(listaDeDestinos[contador] == destino){
//         destinoExiste = true;
//         }
// }