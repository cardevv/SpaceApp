import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./componentes/ModalZoom"



const FundoGradiente =  styled.div`

background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;


`

 const Appcontainer = styled.div`
 width: 90%;
 margin: 0 auto;
 
 


 `

 const MainContainer = styled.main`
 display: flex;
 gap: 24px
 ;
  
 
 `

 const ConteudoGaleria = styled.section `
  display: flex;
  flex-direction: column;
  flex-grow: 1;

 
 `




function App() {

  const  [FotosGaleria , setFotosGaleria] = useState (fotos)
  const [FotoSelecionada, setFotoSelecionada] = useState('')


 return (
  <FundoGradiente>
      <EstilosGlobais>
      </EstilosGlobais>
<Appcontainer>
  <Cabecalho></Cabecalho>


  <MainContainer>
    <BarraLateral></BarraLateral>
    <ConteudoGaleria>
      <Banner 
    backgroundImage={bannerBackground} 
    texto='A galeria mais  completa de fotos do espaço!'
      ></Banner>
      <Galeria aoFotoSelecionada={foto => setFotoSelecionada(foto)} fotos={FotosGaleria}></Galeria>
    </ConteudoGaleria>
    
  </MainContainer>




</Appcontainer>
    



    
    
   

<ModalZoom foto={FotoSelecionada}></ModalZoom>
  </FundoGradiente>
 )

  
  
}

export default App
