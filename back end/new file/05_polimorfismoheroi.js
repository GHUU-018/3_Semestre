class Heroi {
    constructor(nome, poder) {
        this.nome = nome
        this.poder = poder
    }

    apresentar() {
        return `Olá, eu sou ${this.nome} e meu poder é ${this.poder}`
    }

    usarPoder() {
        return `${this.nome} usou um poder genérico`
    }
}


class HeroiVoador extends Heroi {
    constructor(nome, poder) {
        super(nome, poder)
        this.tipo = "voador"
    }

   
    usarPoder() {
        return `${this.nome} usou ataque muito rapido`
    }
}


class HeroiMagico extends Heroi {
    constructor(nome, poder) {
        super(nome, poder)
        this.tipo = "Mágico"
    }

    usarPoder() {
        return `${this.nome} usou um feitiço para escapar`
    }
}

const falcao = new HeroiVoador("falcão", " garras")
const dr_estranho = new HeroiMagico("dr_estranho", "teletransporte")

console.log(falcao.apresentar())
console.log(dr_estranho.usarPoder())

console.log(falcao.apresentar())
console.log(dr_estranho.usarPoder())