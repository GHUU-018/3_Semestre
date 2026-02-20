import express from 'express';
import jogadorController from '../controllers/controllersRanking.js';

router.get('/jogadores', jogadorController.listar);
router.post('/jogadores', jogadorController.adicionar);
router.post('/jogadores/adicionar-ponto', jogadorController.adicionarPontos);

const router = express.Router();