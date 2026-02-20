import { estilos } from "../style/estilos";
import Aula07_multicomponentes, { MeuComponenteNomeado, MeuComponenteNomeado2, EnderecoServidor } from "./Aula07_multicomponentes";
import Aula07_perfil from "./Aula07_perfil";

const Aula07 = () => {

    return (
        <div style={estilos.cardAula}>
            <h2>Aula07 - importação e exportação dos modulos</h2>
            <h3>Compreendendo importação e exportação de módulos ou nomeadas</h3>
            <hr />
            <Aula07_multicomponentes />
            <MeuComponenteNomeado/>
            <MeuComponenteNomeado2/>
            <p>{EnderecoServidor}</p>
            <br />
            <Aula07_perfil />

        </div>
    )
}

export default Aula07