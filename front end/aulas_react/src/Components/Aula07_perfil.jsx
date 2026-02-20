import { estilos } from "../style/estilos";
import { useState } from "react";

const Aula07_perfil = () => {

const [login, setLogin] = useState('');
if(login === 'seguindo'){
    return (
        <div style={estilos.cardPerfil}>    
            <img src="https://i.pinimg.com/474x/ed/2e/53/ed2e53fe10e1a50d875d931f746ff3a1.jpg" alt="" style={estilos.perfilIMG} />
            <p>Plastic Doll</p>
            <button style={estilos.cardBotao} onClick={() => setLogin('')} >deixar de seguir</button>
        </div>
    )
}

    return (

        <div style={estilos.cardPerfil}>
            <img src="https://i.pinimg.com/474x/ed/2e/53/ed2e53fe10e1a50d875d931f746ff3a1.jpg" alt="" style={estilos.perfilIMG} />
            <p>Plastic Doll</p>
            <button style={estilos.cardBotao} onClick={() => setLogin('seguindo')}>seguir</button>
        </div>
    )
}

export default Aula07_perfil