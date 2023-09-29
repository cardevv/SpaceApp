import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria"
import fotos from "./fotos.json"
import { useEffect, useState } from "react"
import ModalZoom from "./componentes/ModalZoom"
import Rodape from "./componentes/Rodape"



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

  const [filtro , setFiltro] = useState('')
  const [tag, setTag] = useState(0)

  const  [FotosGaleria , setFotosGaleria] = useState (fotos)
  const [FotoSelecionada, setFotoSelecionada] = useState('')




  useEffect(() => {

    const fotosFiltradas = fotos.filter(foto=> {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())

      return filtroPorTag && filtroPorTitulo

    })

    setFotosGaleria(fotosFiltradas)
    },[filtro,tag]) 









  const AoFavoritar  = (foto) => {

    if (foto.id === FotoSelecionada?.id) {

      setFotoSelecionada ( {

        ...FotoSelecionada,
        favorita: !FotoSelecionada.favorita



      }

      )



    }



    setFotosGaleria(FotosGaleria.map(FotoDaGaleria =>{
      return {
        ...FotoDaGaleria,
        favorita: FotoDaGaleria.id === foto.id ? !foto.favorita : FotoDaGaleria.favorita


      }


    }))

    
  }


 return (
  <FundoGradiente>
      <EstilosGlobais>
      </EstilosGlobais>
<Appcontainer>
  <Cabecalho 
  setFiltro={setFiltro}
  ></Cabecalho>


  <MainContainer>
    <BarraLateral></BarraLateral>
    <ConteudoGaleria>
      <Banner 
    backgroundImage={bannerBackground} 
    texto='A galeria mais  completa de fotos do espaço!'
      ></Banner>
      <Galeria aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
      fotos={FotosGaleria} 
      AoFavoritar={AoFavoritar}
      setTag={setTag}
      
      ></Galeria>
    </ConteudoGaleria>
    
  </MainContainer>



  
</Appcontainer>
    <Rodape></Rodape>



    
    
   

<ModalZoom 
AoFavoritar={AoFavoritar}
foto={FotoSelecionada}
aoFechar={() => setFotoSelecionada(null)}

></ModalZoom>

  </FundoGradiente>
 )

  
  
}

export default App
