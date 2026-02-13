const pais = {
    nome: 'Brasil',
    populacao: 200000000,
    capital: 'Brasilia',
    idioma: 'Português',
    area: 8500000,
    região: {
        "sudeste": "SP / RJ / ES",
        "norte": "MA / PI / CE / RN / PB / PE / AL",
        "sul": "PR / RS / SC"
    }
}

console.log(pais.capital);

// let nome = pais.capital;
// console.log(`A capital do ${pais.nome} é ${nome}`);

let (nome, capital, populacao, idioma) = pais;
console.log(nome, capital, populacao, idioma);

