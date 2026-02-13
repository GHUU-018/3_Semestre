import Livro from "../models/Livro.js";

let listaLivros = [
    new Livro(1, "O Senhor dos Anéis", "J.R.R. Tolkien", 1178),
    new Livro(2, "1984", "George Orwell", 328),
    new Livro(3, "O Pequeno Príncipe", "Antoine de Saint-Exupéry", 96)
]
const livroController = {
    listarLivros: (req, res) => {
        res.json('listaLivros.ejs', { livros: listaLivros });
    },
    adicionar: (req, res) => {
        const { id, titulo, autor, paginas } = req.body;
        try{
            const novoLivro = new Livro(
                listaLivros.length + 1,
                titulo,
                autor,
                Number(paginas)
            );
            listaLivros.push(novoLivro);
        }catch(e) 
        {
            res.status(400).json('livros.ejs', {livro: listaLivros, erro: e.message});
        }
    },
    marcarComoLido: (req, res) => {
        const { id } = req.body;
        const livro = listaLivros.find(livro => livro.id === Number(id));
        livro.marcarComoLido();
        res.redirect('/livros');
    }
}

export default livroController;

