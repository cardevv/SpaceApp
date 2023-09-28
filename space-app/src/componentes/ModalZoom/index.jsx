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
    position: absolute;
    top: 294px;
    width: 1156px;
    height: 740px;



`

const EstiloBotao = styled.button `
background: rgba(0, 0, 0, 0.7);
    
    border: transparent;
    position: absolute;
    top: 0;
    right: 0;
    img {
        width: 32px;
        height: 32px;
    }


`

const ModalZoom = ({foto}) => {


   // const [fotoModal,setFotoModal] = useState('')


    function FechaModal () {

        
    }

return (
    <>

    {foto && <> 
  <Overlay></Overlay>
  
    <ZoomEstilo open={!!foto}>
        <Card foto={foto} expandida={true}></Card>
        
        <form method="dialog">
            <EstiloBotao onClick={FechaModal}><img src="/icones/fechar.png"></img></EstiloBotao>
        </form>



    </ZoomEstilo>

    
    </>
    
    
}

    
    
    
    
    </>


)


} 

export default ModalZoom