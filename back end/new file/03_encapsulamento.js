class Pessoa{
    #documento;
    nome;
    idade;
    constructor( nome, idade, documento){
        this.nome = nome;
        this.idade = idade;
        this.#documento = documento;
    }

    apresentar(){
        return `${this.nome}, ${this.idade}`
    }
mostrarDocumento(){
    return this.#documento;
}

}
const Pessoa1 = new Pessoa ("jairo", 49, "12345678900");
console.log(Pessoa1.apresentar());
console.log(Pessoa1.mostrarDocumento());


