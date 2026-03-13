import express from 'express';
import {DB, testarConexao} from './db.js';

const app = express();

app.get('/', async (req, res) => {
    await DB.testarConexao();
    res.status(200).json({message: 'Conexão testada com sucesso!'});
});

const porta = 3000;
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);
});