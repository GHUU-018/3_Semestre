import logo from '../assets/react.svg'
import '../style/Cabecalho.css'

const Cabecalho = ( {Aula} ) => {
    return (
        <header className='cabecalho'>
            <img src={logo} alt="" />
            <div>
                <h1>SENAI - Desenvolvemento de Sistemas</h1>
                <p>Aulas de Front - end - {Aula}</p>
            </div>
            <img src="https://sindusconsp.com.br/wp-content/uploads/2020/09/Logo_SENAI_PRINCIPAL_VERMELHO.png" alt="" />
        </header>
    )

}

export default Cabecalho
