class jogador {

    constructor(id, nome, pontuacao, nivel) {

        // Validações simples (opcional, mas didático)

        if (!nome || !pontuacao || !nivel) {


            throw new Error('Nome, pontuação e nível são obrigatórios.');

        }

        const nNivel = Number(nivel);

        if (Number.isNaN(nNivel) || nNivel <= 0) {

            throw new Error('Nível deve ser um número maior que zero.');

        }

        this.id = id;

        this.nome = nome;

        this.pontuacao = pontuacao;

        this.nivel = nNivel;

    }

    descricao() {

        return `${this.nome} — ${this.pontuacao} pontos, nível ${this.nivel}`;

    }

}

export default jogador;