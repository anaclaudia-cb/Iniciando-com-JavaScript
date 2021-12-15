console.log("Trabalhando com condicionais");


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true; // declarar true ou false
const temPassagemComprada = false;
// console.log("Destinos possíveis:");
// console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada == true ){
    console.log("Boa Viagem!"); // mostra a mensagem 
    listaDeDestinos.splice(1,1); 
    console.log(listaDeDestinos); // mostra a lista se for maior de idade
}else {
        console.log("Não é maior de idade e não posso vender"); // mostra a mensagem se for menor de idade
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 || estaAcompanhada== true && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
} 
