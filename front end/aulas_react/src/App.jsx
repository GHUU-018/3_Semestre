import Aula01 from "./Components/Aula01";
import Aula02 from "./Components/Aula02";
import Aula03 from "./Components/Aula03";
import Aula04 from "./Components/Aula04";
import Aula05 from "./Components/Aula05";
import Aula06 from "./Components/Aula06";
import Aula07 from "./Components/Aula07";
import Aula08 from "./Components/Aula08";
import Aula09 from "./Components/Aula09";
import Cabecalho from "./Components/Cabecalho";
import { estilos } from './style/estilos'


const App = () => {



  return (
    <div style={estilos.fundo}>
      < Cabecalho Aula='react'/>
      <main style={estilos.conteudo}>
        <h2>Aulas</h2>
        <div style={estilos.lista_aulas}>
          {/* Aqui incluiremos todos os componentes de Aulas */}
          <Aula01 />
          <Aula02 />
          <Aula03 />
          <Aula04 />
          <Aula05 />
          <Aula06 />
          <Aula07 />
          <Aula08 />
          <Aula09 />
          

        </div>
      </main>
    </div>

  )
}
export default App;
