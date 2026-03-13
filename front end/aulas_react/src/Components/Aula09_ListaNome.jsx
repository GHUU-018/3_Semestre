import {estilos} from '../style/estilos'
import { useEffect } from 'react';
import { useState } from "react";

const Aula09_ListaNome = () => {
const [listaNomes, setListaNomes] = useState([""])
const [novoNome, setNovoNome] = useState("");


function botaoAdicionar() {
    const novaLista = [...listaNomes, novoNome];
        setListaNomes(novaLista);
        localStorage.setItem('listaNomes', JSON.stringify(listaNomes));
}

useEffect(() => {
    const listaSalva = localStorage.getItem('listaNomes') || [""];
        setListaNomes(JSON.parse(listaSalva))
})

function botaoLimpar() {
    setListaNomes([""])
    localStorage.setItem('listaNomes', JSON.stringify([""]))
}


    return (
        <div style={{ ...estilos.container, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <h1 >Lista presença do Churrasco</h1>
            <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <input style={{padding: '4px 2px', width: 150, marginRight: 10, borderRadius: 5, }} type="text" onChange={(e) => setNovoNome(e.target.value)} value={novoNome} />
            <button style={estilos.botaoLISTAR} onClick={botaoAdicionar}>Adicionar</button>
            </div>
            {
                listaNomes.map((nome, index) => (
                    <div key={index} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <p>{nome} <button style={estilos.botaoLISTAR} onClick={() => setListaNomes(listaNomes.filter((_, i) => i !== index))}>remover</button></p>
                        
                    </div>
                ))
            }
            <button style={estilos.botaoLISTAR} onClick={botaoLimpar}>limpar</button>
        </div>
    )
}

export default Aula09_ListaNome;