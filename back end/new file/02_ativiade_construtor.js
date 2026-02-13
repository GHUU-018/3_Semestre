class bruxo {
    constructor(nome, idade, feitico, casa, nivelMagia){
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivelMagia = nivelMagia
    }
}

const bruxo1 = new bruxo("Gustavo", 17, "abra_cadabra", "grifnoria", 9736);
console.log(bruxo1);