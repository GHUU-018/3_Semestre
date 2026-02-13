class Pessoa {
    constructor(nome,) {
        this.nome = nome;

    }
    apresentar() {
        return `${this.nome}`
    }
}
class PessoaFisica extends Pessoa {
    cpf;
    constructor(nome, cpf) {
        super(nome);
        this.cpf = cpf;
    }
}
class PessoaJuridica extends Pessoa {
    cnpj;
    constructor(nome, cnpj) {
        super(nome);
        this.cnpj = cnpj;
    }
}

const ana = new PessoaFisica("ana", "123.456.789-00");
console.log(ana.apresentar());

const sesi = new PessoaJuridica("sesi", "12.345.678/0001-90");
console.log(sesi.apresentar());

class BruxodaGrifinoria extends Bruxo {
    constructor(nome, nivelMagia) {
        super(nome, nivelMagia);
        this.casa = "grifnoria";
    }
    feitico() {
        return this.Lancar_Feitico("abra_cadabra");
    }
}
class BruxodaSonserina extends Bruxo {
    constructor(nome, nivelMagia) {
        super(nome, nivelMagia);
        this.casa = "sonserina";
    }
    feitico() {
        return this.Lancar_Feitico("Serpensortina");
    }
}

console.log();
