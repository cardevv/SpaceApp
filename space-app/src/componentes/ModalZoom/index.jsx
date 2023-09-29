import styled from "styled-components"
import Card from "../Galeria/Card"



const Overlay = styled.div`
background-color: rgba(0,0,0,0.7);
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;

`

const ZoomEstilo = styled.dialog `
   display: flex;
   justify-content: center;
   background:transparent;
   position: absolute;
   padding: 0;
   border: 0;
    top: 294px;
    width: 1156px;
    height: 740px;


    





`

const EstiloBotao = styled.button `
background: transparent ;
    
    border: transparent;
    position: relative;
    top: 20px;
    right: 60px;
    


`

const ModalZoom = ({foto, aoFechar , AoFavoritar}) => {



return (
    <>

    {foto && <> 
  <Overlay></Overlay>
  
    <ZoomEstilo open={!!foto} onClose={aoFechar}>
        <Card foto={foto} expandida={true} AoFavoritar={AoFavoritar}></Card>
        
        <form method="dialog">
            <EstiloBotao 
            formMethod="dialog"
            ><img src="/icones/fechar.png"></img></EstiloBotao>
        </form>



    </ZoomEstilo>

    
    </>
    
    
}

    
    
    
    
    </>


)


} 

export default ModalZoom