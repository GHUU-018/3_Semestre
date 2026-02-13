import '../style/Aula03.css'
import {estilos} from '../style/estilos'
import Aula03_login from '../Components/Aula03_login'

const Aula03= () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 03 - Componentes e estilizações</h2>
            <h3>Criação de componentes e estilizações</h3>
            <p>Aprendemos a criar e realizar componentes e estilizações para melhorar a UI</p>

            <hr />
            <p className="texto">CSS Externo</p>
            <p className= "descricao">A forma mais simples e classica de estilizar um componente</p>

            <hr />
            <p style={{color: "blue", fontWeight: 'bold'}}>Estilização Inline</p>
            <p style={{fontStyle:'italic'}}>estilos aplicados diretamente nos elementos com OBJETOS</p>

            <hr />
            <p style={estilos.tituloModulo}>CSS modules</p>
            <p style={estilos.descricaoModulo}>CSS modularizado é a forma mais comum para mobile</p>
            <hr />
            <Aula03_login />
        </div>
        
    )
}



export default Aula03