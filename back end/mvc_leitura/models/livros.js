class livros {
    constructor(nome, autor, paginas) {
        if(!titulo || !autor ) {
            throw new Error("Titulo ou autor são obrigatorios");
        }
        this.id = this.id;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }

    descricao() {
        return `${this.titulo} de ${this.autor} (${this.paginas} paginas)`
    }
    verificarTamanho() {
        if(this.paginas < 150) {return "leitura curta"}
        if(this.paginas > 360) {return "leitura media"}
        return "leitura longa"
    }

    marcarComoLido() {
        this.lido = true;
    }
}

export default livros