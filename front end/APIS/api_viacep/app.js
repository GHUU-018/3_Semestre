import express from 'express';

const app = express();

app.use('/dogs', express.static('public'));

app.get('/', async(req, res) => {
    res.json('API Funcionando');
});



app.get('/starwars/personagem/:id', async(req, res) => {
    const codigo = req.params.id;

    const resposta = await fetch(`https://swapi.dev/api/people/${codigo}/`);
    const dados = await resposta.json();
    const nome = dados.name;
    const altura = dados.height;
    const peso = dados.mass;
    const cor_dos_olhos = dados.eye_color;

    // res.json(dados);
    res.json({nome, altura, peso, cor_dos_olhos});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando http://localhost:${PORT}`);
});


app.get('dog/:id', async(req, res) => {
    const id = req.params.id;
    const url = await fetch(`https://http.dog/${id}.jpg`);
    res.json({url});


});