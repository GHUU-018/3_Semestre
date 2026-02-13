import { estilos } from "../style/estilos";
import Aula06_Contador from "./Aula06_Contador";
import { useState } from "react";
import Aula06_placar from "./Aula06_placar";

const Aula06 = () => {
// declarando uma variavel de estado 

const [nome, setNome] = useState(''); // valor inicial do estado é uma string vazia
const [cidade, setCidade] = useState(''); // valor inicial do estado é uma string vazia
const [telefone, setTelefone] = useState(''); // valor inicial do estado é uma string vazia
const [visivel, setVisivel] = useState(false); // valor inicial do estado é false
const [botao, setBotao] = useState('botao'); // valor inicial do estado é 'Mostrar saldo 👀'

//criando um botão para limpar os campos
const limparCampos = () => {
    setNome('');
    setCidade('');
    setTelefone('');
}
    return (
        <div style={estilos.cardAula}>
            <h2>Aula06 - Estados de um componente</h2>
            <h3>o hook useState adiciona estados a componentes funcionais</h3>
            <hr />

            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
            <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder="Cidade" />
            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone" />
            <p>olá {nome}, você mora em {cidade} e seu telefone é {telefone}</p>
            <button onClick={limparCampos}>Limpar Campos</button>
            <hr />
            <button onClick={() => {
                setVisivel(!visivel);
                setBotao(visivel ? 'mostrar saldo 👀' : 'esconder saldo ❌');
            }}>{botao}</button>

            {visivel == false ? <p>R$ ***,**</p> : <p>R$ 542,50</p>}


            <hr />
            <Aula06_Contador />
            <hr />
            <Aula06_placar />
        </div>
    );


}

export default Aula06