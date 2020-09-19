function numeros_pares(a, b){
    while(a <= b){
        if(a % 2 == 0){
            console.log(a);
        }
        a++;
    }
}

function verifica_maioridade(idade){
    if(idade >= 18){
        console.log("Maior de idade");
    }else{
        console.log("Menor de idade");
    }
}

function verifica_ano_atual(ano){
    if(ano == new Date().getFullYear()){
        console.log("Ano atual");
    }else{
        console.log("Não é o ano atual");
    }
}

function verifica_marca(marca){
    switch(marca){
        case 'Fujioka' : return "Marca certa";
        case 'Xingling' : return "Outra marca";
        default: return "Marca desconhecida";
    }
}