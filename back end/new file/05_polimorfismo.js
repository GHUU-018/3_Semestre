class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `${this.nome}, ${this.idade}`;
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome, cpf) {
        super(nome);
        this.cpf = cpf;
    }
    apresentar() {
        return `olá ${this.nome}, meu cpf é ${this.cpf}`;
    }
}

class PessoaJuridica extends Pessoa {
    constructor(nome, cnpj) {
        super(nome);
        this.cnpj = cnpj;
    }
    apresentar() {
        return `olá ${this.nome}, meu cnpj é ${this.cnpj}`;
    }
}

const ana = new PessoaFisica("ana", "123.456.789-00");
console.log(ana.apresentar());

const sesi = new PessoaJuridica("sesi", "12.345.678/0001-90");
console.log(sesi.apresentar());

const joao = new Pessoa("joao");
console.log(joao.apresentar());

class Bruxo extends Pessoa {
    constructor(nome, idade, feitico, casa, nivelMagia) {
        super(nome, idade);
        this.feitico = feitico;
        this.casa = casa;
        this.nivelMagia = nivelMagia;
    }
}

const bruxo1 = new Bruxo("Gustavo", 17, "abra_cadabra", "grifnoria", 9736);
console.log(bruxo1);