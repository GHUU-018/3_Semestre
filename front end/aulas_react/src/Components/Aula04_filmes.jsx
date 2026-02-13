import {estilos} from '../style/estilos'


 const Filmes = ({img, titulo, genero, }) => {
     return (
        <div style={estilos.cardFilme}>
            <img style={{width: 200}} src= {img} alt="" />
            <h3>{titulo}</h3>
            <p>{genero}</p>
            <button style={estilos.botaoAssistir}>Assistir</button>
        </div>
     )
 }

 export default Filmes