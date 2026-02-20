import { useState } from "react";
import { estilos } from "./gamesestilos";

const Game = () => {

    const [numeroSecreto, setNumeroSecreto] = useState(0);
    const [chute, setChute] = useState("");
    const [mensagem, setMensagem] = useState("Adivinhe um numero de 1 a 100");
    const [tentativas, setTentativas] = useState(0);
    const [jogoFinalizado, setJogoFinalizado] = useState(false);

    function sortearNumero() {
        return Math.floor(Math.random() * 100) + 1;
    }
    function botaoChutar() {
        if (numeroSecreto == chute) {
            setMensagem(`Parabéns! Você acertou o número secreto em ${tentativas} tentativas!`);
            setJogoFinalizado(true);
        } else if (numeroSecreto < chute) {
            setMensagem(`Você chutou o numero ${chute}. O numero secreto é menor!`)
            setChute('')
            setTentativas(tentativas + 1);
        }else {
            setMensagem(`Você chutou o numero ${chute}. O numero secreto é maior!`)
            setChute('')
            setTentativas(tentativas + 1);
        } 
    }

function botaoNovoJogo() {
    setChute("");
    setJogoFinalizado(false);
    setTentativas(1);
    setMensagem("Adivinhe um numero de 0 a 100");
    setNumeroSecreto(sortearNumero);
}


    return (
        <section style={estilos.container}>
            <div style={estilos.conteudo}>
                <div style={estilos.informacoes}>
                    <div style={estilos.texto}>
                        <h1 style={estilos.h1}>Jogo do N° Secreto</h1>
                        <p style={estilos.mensagem}>{mensagem}</p>
                        <input type="number" style={estilos.chute} onChange={chute => setChute(chute.target.value)} value={chute}/>
                    </div>
                    <div style={estilos.botoes}>
                        <button style={estilos.botao} onClick={botaoChutar}>chutar</button>
                        <button style={estilos.botao} onClick={botaoNovoJogo}>novo jogo</button>
                    </div>

                </div>
                <img src="./img/ia.png" style={estilos.imagem} />
            </div>
        </section>
    );
}

export default Game;