import { estilos } from "../style/estilos";
import Aula05_exercicios from "./Aula05_exercicios";

const Aula05 = () => {
    function botaoclique() {
        alert('Você clicou no botão')
        console.log('clique no botão');
    }

    function botaoDuploClique() {
        alert(' Vocé clicou duas vezes no parágrafo')
        console.log('clique duplo no parágrafo');
    }
    function entradaMouse(event) {
        console.log('Mouse entrou');
        event.target.style.backgroundColor = 'red';
    }
    function saidaMouse(event) {
        console.log('Saiu do parágrafo');
        event.target.style.backgroundColor = 'blue';  

    }
    function AlterarCor (event) {
        if (event.key == 'a') {
            event.target.style.backgroundColor = 'blue';
            event.target.style.color = 'white';
        } else if (event.key == 'w') {
            event.target.style.backgroundColor = 'green';
            event.target.style.color = 'white';
        } else if (event.key == 'd') {
            event.target.style.backgroundColor = 'gray';
            event.target.style.color = 'white';
        } else if (event.key == 's') {
            event.target.style.backgroundColor = 'red';
            event.target.style.color = 'white';
        }
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 05 - Eventos de um componente </h2>
            <h3>Os eventos são fundamentais para criar interatividade em aplicações web</h3>
            <hr />

            <p>Evento onClick - clique do usuario em qualquer elemento</p>
            <button onClick={botaoclique}>Clique aqui</button>
            <p onDoubleClick={botaoDuploClique}>Este parágrafo recebe um duplo clique</p>

        <input onChange={(event) => console.log(event.target.value)} type="text"  placeholder="digite algo..."/>

        <select onChange={(event) => console.log(event.target.value)}>
            <option value='1A'>1º A EM</option>
            <option value='2A'>2º A EM</option>
            <option value='3A'>3º A EM</option>
            <option value='3B'>3º B EM</option>
        </select>

        <hr />
        <p>Evento onMouseEnter / OnMouseLeave</p>
        <p onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>Passe o mouse aqui</p>
        <hr />
        <p>Evento onKeyDown - Aciona um evento quando preciona uma tecla</p>
        <input type="text" onKeyDown={(event) => alert(event.key)}/>
        <hr />
        <Aula05_exercicios />
        </div>
    );
};

export default Aula05;