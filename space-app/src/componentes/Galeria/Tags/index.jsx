 import styled from 'styled-components'
import tags from './tags.json'
import { useState } from 'react'
 
 const EstiloTags = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding:  50px 0px;
    width: 758px;
    height: 49px;
    top: 576px;
    left: 260px;
   
    gap: 25px;




    button {

       


        
    }
   

  

    p {


    color: #D9D9D9;
   
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    width: 219px;
    height: 29px;
    top: 586px;
    left: 260px;



    }
    
 `


 const EstiloBotao = styled.button`
 
        font-weight:400px;
        font-size: 19px;
        color: #fff;
        width: 94px;
        height: 49px;
        padding: 10px, 8px;
        border-radius: 10px;
        border-color:${props => props.$ativo ? '#C98CF1' : 'transparent'};
        gap: 10px;
        background-color: rgba(217,217,217,0.3);
        cursor: pointer;
 `
 
 const Tags = ()=> {


    const[Botao, setBotao] = useState('')

    const trocaCorBorda = (id) => {
        setBotao(id)

    }

return <>

<EstiloTags>
    <p>Busque por tags:</p>
{tags.map(tag => <EstiloBotao $ativo={tag.id === Botao} onClick={() => trocaCorBorda(tag.id)} key={tag.id}>{tag.titulo}</EstiloBotao>)}
</EstiloTags>


</>

 }


 export default Tags