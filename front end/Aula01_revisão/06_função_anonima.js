function saudacao(nome) {
    console.log(`tenha um bom dia ${nome}`);
}
saudacao("Gustavo");

// função anonima
const saudacao2 = function (nome) {
    console.log(`tenha um bom dia ${nome}`);
}

saudacao2("Gustavo");

// função nomeada de soma
function soma(x, y) {
    return x + y;
}

// funcao anonima de soma2
const soma2 = function (x, y) {
    return x + y;
}