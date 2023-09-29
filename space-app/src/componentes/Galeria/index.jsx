import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Card from "./Card";
import CardPopular from "./CardPopular";




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
margin-right: 120px;
`

const Galeria = ({fotos = [], aoFotoSelecionada , AoFavoritar , setTag}) => {

    return (
        <>
        <Tags setTag={setTag}></Tags>
        
        <GaleriaContainer>


            <SecaoFluida>
                <Titulo>Navegue pela galeria</Titulo>
                <CardContainer>
                {fotos.map(foto => <Card

                AoFavoritar={AoFavoritar}
                aoZoomSolicitado={aoFotoSelecionada}
                key={foto.id}
                foto={foto} 
                ></Card>)}

                </CardContainer>
               
            </SecaoFluida>
            <FavoritoEstilo>
                <Populares></Populares>
                <CardPopular></CardPopular>
            </FavoritoEstilo>
            

            


        </GaleriaContainer>
        
        </>

        
    )
}

export default Galeria;