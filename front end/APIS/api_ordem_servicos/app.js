import express from 'express';
import { DB, testarConexao } from './db.js';
import rotasUsuarios from './src/routes/rotasUsuarios.js';
import rotasDepartamentos from './src/routes/rotasDepartamentos.js';
import rotasOrdemServicos from './src/routes/rotasOrdem_Servico.js';
// usando swagger
import swaggerUi from 'swagger-ui-express';
import documentacao  from './config/swagger.js';

const app = express();
app.use(express.json());
app.use(rotasUsuarios);
app.use(rotasDepartamentos);
app.use(rotasOrdemServicos);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao));

app.get('/', async (req, res) => {
    await testarConexao();
    // res.status(200).json({ message: 'Conexão testada com sucesso!' });
    res.redirect('/swagger');
});



const porta = 3000;
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);
});