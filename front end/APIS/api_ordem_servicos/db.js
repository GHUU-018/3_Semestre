import { Pool } from 'pg';

const DB = new Pool({
    user: 'postgres',
    host: 'db.prsciuoojjxkvehsewqb.supabase.co',
    database: 'postgres',
    port: 5432,
    password: 'bancodedadossenai',
})

const testarConexao = async () => {
    try {
        await DB.connect();
        console.log('Conexão realizada com sucesso!');
        DB.release();
    }
    catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error.message);
    }
}

