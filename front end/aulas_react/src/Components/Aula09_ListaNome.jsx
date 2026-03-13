import {estilos} from '../style/estilos'
import { useState } from "react";

const Aula09_ListaNome = () => {
const [listaNomes, setListaNomes] = useState([""])
const [novoNome, setNovoNome] = useState("");

function botaoAdicionar() {
setListaNomes([...listaNomes, novoNome])
setNovoNome("")

}


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
            <h1 s>Lista presença do Churrasco</h1>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <input style={{padding: '5px 2px', width: 150}} type="text" onChange={(e) => setNovoNome(e.target.value)} value={novoNome} />
            <button style={estilos.botaoLISTAR} onClick={botaoAdicionar}>Adicionar</button>
            </div>
            {
                listaNomes.map((nome, index) => (
                    <div key={index} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <p>{nome} <button style={estilos.botaoLISTAR} onClick={() => setListaNomes(listaNomes.filter((_, i) => i !== index))}>remover</button></p>
                        
                    </div>
                ))
            }
            <button style={estilos.botaoLISTAR} onClick={() => setListaNomes([])}>limpar</button>
        </div>
    )
}

export default Aula09_ListaNome;