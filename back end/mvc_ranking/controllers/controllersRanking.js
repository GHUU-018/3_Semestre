import jogador from '../models/ranking.js';

// "Banco" em memória (array)

let listaJogador = [

new jogador( '', '', 96),

new jogador( '', '', 288),

new jogador( '', '', 280)

];

const jogadorController = {

listar: (req, res) => {

res.render('jogador', { jogador: listaJogador, erro: null });

},

adicionar: (req, res) => {

const { jogador, pontuacao, nivel } = req.body;
try {

const novo = new jogador(

listaJogador.length + 1,

jogador,

pontuacao,

Number(nivel)

);

listaJogador.push(novo);

res.redirect('/jogador');

} catch (e) {

// Volta para a view com mensagem de erro

res.status(400).render('jogador', { jogador: listaJogador, erro: e.message
});

}

},

};

export default jogadorController;