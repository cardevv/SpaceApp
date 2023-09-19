import { Children } from "react"
import styled from "styled-components"

const ItemEstilo = styled.li `


`


const ItemNavegacao = ({children , iconeAtivo , iconeInativo, ativo = false}) => {


    return <ItemEstilo>
        <img src={ativo ? iconeAtivo : iconeInativo} alt=""> 
        </img>
        {children}

    </ItemEstilo>
}


export default ItemNavegacao