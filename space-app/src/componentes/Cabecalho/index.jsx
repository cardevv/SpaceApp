import {styled} from 'styled-components'
import CampoTexto from '../CampoTexto'



const HeaderEstilizado = styled.header`

padding: 50px 0;
display: flex;
justify-content: space-between;
img {

    margin: 0px 20px;
    max-width: 212px;
    
}






`



const Cabecalho = ( {setFiltro}) => {

return(

    <HeaderEstilizado>
        <img   src='imagens/logo.png' alt=''></img>

        <CampoTexto  setFiltro={setFiltro}></CampoTexto>
    </HeaderEstilizado>

    
   

)
  


}

export default Cabecalho