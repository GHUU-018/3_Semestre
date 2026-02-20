import jogador from '../models/ranking.js';

let listaJogadores = [
    new jogador(1, "ricardo", 98),
    new jogador(2, "douglas", 88),
    new jogador(3, "Marco Antonio", 300)
];

const jogadorControler = {


    listar: (req, res) => {
        res.render('jogadores.ejs', { jogadores: listaJogadores });
    },
    adicionar: (req, res) => {
        const { nome, pontuacao } = req.body;

        try {
            const novoJogador = new jogador(listaJogadores.length + 1,
                nome,
                Number(pontuacao)
            );
            listaJogadores.push(novoJogador);
            res.redirect('/jogadores');
        } catch (e) 
        {
            res.status(400).render('jogadores.ejs', { jogador: listaJogadores, erro: e.message });
        }
    },
    adicionarPontos: (req, res) => {
        const { id } = req.params;
        const jogador = listaJogadores.find(j => j.id === Number(id));
        jogador.relacionarPontos();
        res.redirect('/jogadores');
    }
}

export default jogadorControler;