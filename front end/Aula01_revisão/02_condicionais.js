const idade = 17;

if (idade >= 18) {
    console.log("voce é maior de idade");
}  else if (idade >12 && idade < 17) {
    console.log("voce é adolecente");
} else if (idade <12 ) {
    console.log("voce é criança");
}

// operador ternario
let tema = 'dark';
let corFundo = 'white';
if (tema == 'dark') {
    corFundo = 'black';
} else {
    corFundo = 'white';
}

// condicao       se verdadeiro       se falso
tema == 'dark' ?  corFundo = 'black' : corFundo = 'white';