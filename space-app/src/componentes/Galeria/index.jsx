import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Card from "./Card";




const GaleriaContainer = styled.div `

display: flex;
padding: 10px;

`
const FavoritoEstilo = styled.div`





`

const SecaoFluida = styled.section `

flex-grow: 1;


`

const CardContainer = styled.section `
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
 gap: 24px;
`

const Galeria = ({fotos = []}) => {

    return (
        <>
        <Tags></Tags>
        
        <GaleriaContainer>


            <SecaoFluida>
                <Titulo>Navegue pela galeria</Titulo>
                <CardContainer>
                {fotos.map(foto => <Card
                key={foto.id}
                foto={foto} 
                ></Card>)}

                </CardContainer>
               
            </SecaoFluida>
            <FavoritoEstilo>
                <Populares></Populares>
            </FavoritoEstilo>
            

            


        </GaleriaContainer>
        
        </>

        
    )
}

export default Galeria;