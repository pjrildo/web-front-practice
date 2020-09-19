function exibirNome(nome){
   return nome;
}

function exibeData(){
    console.log(new Date());
}

setInterval(() =>{
    exibeData();
}, 1000);

setTimeout(() =>{
    console.log("Tempo esgotado (5s)");
}, 5000);