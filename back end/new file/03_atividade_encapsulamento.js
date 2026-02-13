class bruxo {
    nome;
    idade;
    feitico;
    casa;
    nivelMagia;
    #nivelEnergia = 100;
    
    constructor(nome, idade, feitico, casa, nivelMagia, nivelEnergia) {
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivelMagia = nivelMagia;
        this.#nivelEnergia = nivelEnergia
    }

    mostrarEnergia() {
        return this.#nivelEnergia;
    }
    lancar_Feitico() {
        this.#nivelEnergia -= 10; 
    }
    recarregar() {
        this.#nivelEnergia += 10; 
    }

}

const bruxo1 = new bruxo("Gustavo", 17, "abra_cadabra", "grifnoria", 9736, 100);
console.log(bruxo1.mostrarEnergia());
bruxo1.lancar_Feitico();
console.log(bruxo1.mostrarEnergia());
bruxo1.recarregar();
console.log(bruxo1.mostrarEnergia());


