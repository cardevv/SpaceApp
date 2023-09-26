import styled from "styled-components";

const CardEstilo = styled.div`

width: ${props => props.$expandida ? '90%' : '420px'} ;

max-width: 100%;
margin: 0;
display: flex;
flex-direction: column;
flex-grow: 1;

img {

    max-width: 100%;
    border-radius:  20px 20px 0 0;


}



`

const CardLegenda = styled.div `

background-color: #001634;
border-radius: 0px 0px 20px 20px;
color: white;
box-sizing: border-box;
padding: 12px;

`

const Cardfooter = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;

`

const CardTitulo = styled.h3`

font-family: 'GandhiSansBold';
margin: 0;
font-size: 16px;

`




const CardFonte = styled.p`

flex-grow: 1;
margin: 0;
font-size: 16px;

`


const CardBotao = styled.button `
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    
    border: none;
    cursor: pointer;


`
    




const Card = ( {foto , expandida = false}) => {

  return (<CardEstilo $expandida={expandida} id={`foto-${foto.id}`}>
         <img src={foto.path} alt={foto.alt}></img>
            <CardLegenda>
                <CardTitulo>{foto.titulo}</CardTitulo>
                <Cardfooter>
                    <CardFonte>{foto.fonte}</CardFonte>
                    <CardBotao><img src="/icones/favorito.png" alt="icone favorito"></img></CardBotao>
                    {!expandida && <CardBotao aria-hidden={expandida}>
                        <img src="/icones/expandir.png" alt="icone expandir"></img></CardBotao>}
                </Cardfooter>
            
            
        
        
            </CardLegenda>   



    </CardEstilo>)  





}

export default Card;