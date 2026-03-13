import { Router } from "express";
import { DB } from "../../db.js";

const router = Router();

router.get('/usuarios', async (req, res) => {
    try {
        const query = 'SELECT * from usuarios ORDER BY id_usuario';
        const usuarios = await DB.query(query);
        res.status(200).json(usuarios.rows);
    } catch (error) {console.error('Erro ao buscar usuários:', error.message);
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
})
router.post('/usuarios', async (req, res) => {
    const {nome, email, senha} = req.body;
try{
    const comando = `INSERT INTO teste(nome, email, senha)
    VALUES ($1, $2, $3)`;
    const valores = [nome, email, senha];
    await DB.query(comando, valores);
    console.log(comando, valores);

    res.status(201).json({ message: 'Usuário cadastrado' });
}catch (error) {
    console.error('Erro ao cadastrar usuário:', error.message);
    res.status(500).json({ error: 'Erro ao cadastrar usuário' });
}   
})

router.put('/usuarios/id_usuario', async(req, res) => {
    const {id_usuario} = req.params;
    const {nome, email, senha} = req.body;
    try{
        const verificarUsuario = await BD.query(`SELECT * FROM USUARIOS
            WHERE id_usuario = $1`, [id_usuario])
            if(verificarUsuario.rows.length === 0){
                return res.status(404)
            }
            const comando = `UPDATE USUARIO SET nome = $1, email = $2, senha = $3
            WHERE id_usuario = $4`;
            const valores = [nome, email, senha, id_usuario];
            await DB.query(comando, valores);
            res.status(201).json({ message: 'Usuário atualizado' });
    }catch (error) {
        console.error('Erro ao atualizar usuário:', error.message);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
})


export default router;