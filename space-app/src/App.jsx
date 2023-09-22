import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/banner.png'



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
<Banner 

backgroundImage={bannerBackground} 
texto='A galeria mais  completa de fotos do espaço!'

>
</Banner>


    
    
   


  </FundoGradiente>
 )

  
  
}

export default App
