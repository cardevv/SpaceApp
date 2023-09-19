import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstiloGlobais/EstilosGlobais"
import Cabecalho from "./componentes/EstiloGlobais/Cabecalho"
import CampoTexto from "./componentes/CampoTexto"
import BarraLateral from "./componentes/BarraLateral"



const FundoGradiente =  styled.div`

background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;


`




function App() {
 return (
  <FundoGradiente>
    <EstilosGlobais>    
    </EstilosGlobais>

    
<Cabecalho>

</Cabecalho>
<BarraLateral></BarraLateral>


    
    
   


  </FundoGradiente>
 )

  
  
}

export default App
