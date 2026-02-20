class jogador {

    constructor(id, nome, pontuacao) {

        this.id = id;
        this.nome = nome;
        this.pontuacao = Number(pontuacao)
    }
    resumo(){
        return `Nome: ${this.nome} - Pontuação: ${this.pontuacao}`;
    }
    relacionarPontos(){
        this.pontuacao += 30;
    }
    nivel(){
        if(this.pontuacao <= 100){return "iniciante";} 
        if(this.pontuacao <= 300){return "intermediário";} 
        return "avançado";
    }
}

export default jogador;