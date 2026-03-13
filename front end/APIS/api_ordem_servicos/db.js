import { Pool } from 'pg';

// export const DB = new Pool({
//     user: 'postgres',
//     host: 'db.prsciuoojjxkvehsewqb.supabase.co',
//     database: 'db_ordem_servicos',
//     port: 5432,
//     password: 'admin',
// })
export const DB = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_ordem_servicos',
    port: 5432,
    password: 'admin',
})

export const testarConexao = async () => {
    try {
        await DB.connect();
        console.log('Conexão realizada com sucesso!');
        
    }
    catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error.message);
    }
}

