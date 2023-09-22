import {styled} from 'styled-components'



const ContainerEstilo = styled.div`
position: relative;
display: inline-block;

      

`

const EstiloCampoTexto = styled.input`
font-family: Arial, Helvetica, sans-serif;
padding:  10px 16px;
margin: 0px 20px;
border-radius: 10px;
border:  2px solid;
border-color: #C98CF1;
background:transparent;
box-sizing: border-box;
width: 602px;
height: 50px;
color: #D9D9D9;
font-weight: 400;
font-size: 20px;
line-height: 20px;
gap: 365;

`


const IconeLupa = styled.img`
    position: absolute;
    top: 5px;
    right: 10px;
    width: 38px;
    height: 38px;
`;


const CampoTexto = () => {


    return (

        <ContainerEstilo>
            <EstiloCampoTexto placeholder='O que você procura?'></EstiloCampoTexto>
            <IconeLupa  src='./icones/search.png'  ></IconeLupa>

        </ContainerEstilo>

    )
}

export default CampoTexto