import express from 'express';
import livroController from '../controllers/livrosControler.js';

const router = express.Router();

router.get('/livros', livroController.listarLivros);
router.post('/livros', livroController.adicionar);
router.post('/livros/marcarComoLido', livroController.marcarComoLido);