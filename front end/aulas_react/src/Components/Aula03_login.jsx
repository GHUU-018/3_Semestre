/** @type {{ [key: string]: import('react').CSSProperties }} */
import { estilos } from '../style/estilos'
const Aula03_login = () => {
    return (
        <div style={estilos.loginConteudo}>
            <img  style={{width: 200}} src="https://sindusconsp.com.br/wp-content/uploads/2020/09/Logo_SENAI_PRINCIPAL_VERMELHO.png" alt="" />
            <h2 style={estilos.tituloLogin}>Login</h2>
            <h3 style={{marginRight: 125}}>Email</h3>
            <input style={{padding: 8}} type="email" placeholder="Digite seu email" />
            <h3 style={{marginRight: 125}}>Senha</h3>
            <input style={{padding: 8}} type="password" placeholder="Digite sua senha" />
            <button style={estilos.botaoLogin}>Entrar</button>
        </div>
    )
}


export default Aula03_login