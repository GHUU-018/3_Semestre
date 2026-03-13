import { Router } from "express";
import { DB } from "../../db.js";

const router = Router();

router.get('/Departamentos', async (req, res) => {
    try {
        const query = 'SELECT * from departamentos ORDER BY id_departamento';
        const departamentos = await DB.query(query);
        res.status(200).json(departamentos.rows);
    } catch (error) {console.error('Erro ao buscar departamentos:', error.message);
        res.status(500).json({ error: 'Erro ao listar departamentos' });
    }
})
router.post('/Departamentos', async (req, res) => {
    const { nome, descricao } = req.body
    try {
        const comando = `INSERT INTO USUARIOS(nome, descricao)
    VALUES($1, $2)`;
        const valores = [nome, descricao];

        await BD.query(comando, valores)
        console.log(comando, valores);
        return res.status(201).json("Departamento cadastrado.")
    } catch (error) {
        console.log('Erro ao cadastrar Departamento:', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar Departamento' })
    }
})
router.put('/Departamentos/id_departamento', async(req, res) => {
    const {id_departamento} = req.params;
    const {nome, descricao} = req.body;
    try{
        const verificarDepartamento = await BD.query(`SELECT * FROM DEPARTAMENTOS
            WHERE id_departamento = $1`, [id_departamento])
            if(verificarDepartamento.rows.length === 0){
                return res.status(404)
            }
            const comando = `UPDATE DEPARTAMENTO SET nome = $1, descricao = $2
            WHERE id_departamento = $4`;
            const valores = [nome, descricao, id_departamento];
            await DB.query(comando, valores);
            res.status(201).json({ message: 'Departamento atualizado' });
    }catch (error) {
        console.error('Erro ao atualizar departamento:', error.message);
        res.status(500).json({ error: 'Erro ao atualizar Departamento' });
    }
})

export default router;