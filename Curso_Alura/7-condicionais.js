console.log("Trabalhando com condicionais");


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true; // declarar true ou false
// console.log("Destinos possíveis:");
// console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade"); // mostra a mensagem 
    listaDeDestinos.splice(1,1); 
    console.log(listaDeDestinos); // mostra a lista se for maior de idade
}else if(estaAcompanhada){ 
        // se a pessoa for menor de idade
        console.log("Comprador está acompanhado");
        listaDeDestinos.splice(1,1);
        console.log(listaDeDestinos);
    }else{
        console.log("Não é maior de idade e não posso vender"); // mostra a mensagem se for menor de idade
    } 


// console.log(listaDeDestinos);
