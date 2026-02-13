import { estilos } from "../style/estilos";

const Aula05_exercicios = () => {
    function MaisAura() {
        alert('Mais Aura');
    }
    function MenosAura() {
        alert('Menos Aura');
    }
    function lerMensagem(event) {
        console.log(event.target.value);
        
    }
    function entradaMouse(event) {
        console.log('Mouse entrou');
        event.target.style.backgroundColor = 'green';
    }
    function saidaMouse(event) {
        console.log('Saiu do parágrafo');
        event.target.style.backgroundColor = 'blue';  
    }


    return (
        <div style={estilos.cardAula}>
            <button onClick={MaisAura}>Mais Aura</button>
            <button onClick={MenosAura}>Menos Aura</button>
            <input type="text" onChange={lerMensagem} />
            <hr />
            <div style={{width: 100, height: 100}}>
                <input type="text" onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}  />
            </div>
        </div>
        
    );

};

export default Aula05_exercicios;