import { Router } from "express";
import { DB } from "../../db.js";
const router = Router();

router.get('/Ordem_Servico', async (req, res) => {
    try {
        const query = 'SELECT * from ordem_servico ORDER BY id_ordem_servico';
        const ordem_servico = await DB.query(query);
        res.status(200).json(ordem_servico.rows);
    } catch (error) {console.error('Erro ao buscar ordens de serviço:', error.message);
        res.status(500).json({ error: 'Erro ao listar ordens de serviço' });
    }
})
router.post('/ordem_servico', async (req, res) => {
    const { numero_ordem, titulo, descricao, id_usuario, id_departamento } = req.body
    try {
        const comando = `INSERT INTO ordem_servico(numero_ordem, titulo, descricao, id_usuario, id_departamento)
    VALUES($1, $2, $3, $4, $5)`;
        const valores = [numero_ordem, titulo, descricao, id_usuario, id_departamento];

        await BD.query(comando, valores)
        console.log(comando, valores);
        return res.status(201).json("Ordem de serviço cadastrado.")
    } catch (error) {
        console.log('Erro ao cadastrar Ordem de serviço:', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar Ordem de serviço' })
    }
})
router.put('/ordem_servico/id_ordem', async(req, res) => {
    const {id_ordem} = req.params;
    const {numero_ordem, titulo, descricao, id_usuario, id_departamento} = req.body;
    try{
        const verificarOrdem = await BD.query(`SELECT * FROM ORDEM_SERVIÇO
            WHERE id_ordem = $1`, [id_ordem])
            if(verificarOrdem.rows.length === 0){
                return res.status(404)
            }
            const comando = `UPDATE ORDEM_SERVIÇO SET numero_ordem = $1, titulo = $2, descricao = $3, id_usuario = $4, id_departamento = $5
            WHERE id_ordem = $6`;
            const valores = [numero_ordem, titulo, descricao, id_usuario, id_departamento, id_ordem];
            await DB.query(comando, valores);
            res.status(201).json({ message: 'Ordem de serviço atualizado' });
    }catch (error) {
        console.error('Erro ao atualizar Ordem de serviço:', error.message);
        res.status(500).json({ error: 'Erro ao atualizar Ordem de serviço' });
    }
})

export default router;