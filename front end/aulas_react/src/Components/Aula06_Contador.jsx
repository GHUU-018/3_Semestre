import { useState } from "react";

const Aula06_Contador = () => {

const [numero, setNumero] = useState(0); // valor inicial do estado é 0 mas nao pode ser menos que 0
if (numero < 0) {
    setNumero(0);
}

    return (
        <div style={{border: '1px solid black', padding: '10px',
         marginTop: '10px', alignContent: 'center'}}>
           <h2>Nº: {numero}</h2>
           <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
              <button onClick={() => setNumero(numero - 1)}>Diminuir</button>
              

        </div>
    );
}

export default Aula06_Contador