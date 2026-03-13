import {estilos} from '../style/estilos'
import { useState } from "react";
import Aula07_perfil from './Aula07_perfil';
import Aula09_Numero from './Aula09_Numero';
import Aula09_ListaNome from './Aula09_ListaNome';

const Aula09 = () => {
const [numerosSorteados, setNumerosSorteados] = useState([10, 43, 28, 2])

const [listaPerfil, setListaPerfil] = useState([
    {
        "nome": "João", "foto": "https://static.wikia.nocookie.net/roblox-findthememes/images/b/bc/Tyler.png/revision/latest?cb=20240401214940"
    },
    {
        "nome": "Maria", "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadtVy7uMdNsj4xbexQFWZqAeWcMch6-SZyg&s"
    },
    {
        "nome": "Pedro", "foto": "https://i.pinimg.com/736x/3b/03/7d/3b037da388dd9c88f6f5dcbe050a94cb.jpg"
    }
])

function botaoSortear() {
    const novoNumero = Math.floor(Math.random() * 60) + 1
    setNumerosSorteados([...numerosSorteados, novoNumero])
}
function botaoExcluir(nr) {
    const novosNumeros = numerosSorteados.filter((numero) => numero != nr)
    setNumerosSorteados(novosNumeros)
}


    return(
        <div style={estilos.cardAula}>
            <h2>Aula 09 - Listas em react</h2>
            <h3>Exibindo conteudos dinamicamente com listas</h3>
            <hr />
            <button onClick={() => botaoSortear()}>Sortear um novo numero</button>
            <h3>Lista de numeros sorteados</h3>
            {/* a função map é como o for para arrays */}
            {
                numerosSorteados.map((numero) => {
                    <Aula09_Numero key={numero} numero={numero} excluir={botaoExcluir}/>
                })
            }
            {
                listaPerfil.map((perfil, index) => {
                    return <Aula07_perfil key={index} nome={perfil.nome} foto={perfil.foto}/>
                })
            }
            <hr />
            <Aula09_ListaNome/>
            </div>
    )
}

export default Aula09;