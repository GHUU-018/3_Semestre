import {estilos} from '../style/estilos'
import Aula11_CadastroProdutos from './Aula11_CadastroProdutos'

const Aula11 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 11 - Cadastro de produtos</h2> 
            <h3>Criando uma lista de produtos e armazenando no localStorage</h3>
            <Aula11_CadastroProdutos />
        </div>
    )
}

export default Aula11