import styled from "styled-components";

const PopularEstilo = styled.section`

display: flex;
flex-direction: column;
gap: 24px;
margin-left: -38px;







img {
   
    width: 212px;
    height: 158px;
    border-radius: 20px;
}


button {

    width: 208px;
    height: 56px;
    border-radius: 10px;
    background: transparent;

    color: white;
    border: 2px solid;
    border-color:#C98CF1 

}

button:hover {

    border-color: white;
    cursor: pointer;
}



`


const CardPopular = () => {


    return (
<PopularEstilo>

        <img src="./imagens/populares/foto-1.png"></img>
        <img src="./imagens/populares/foto-2.png"></img>
        <img src="./imagens/populares/foto-3.png"></img>
        <img src="./imagens/populares/foto-4.png"></img>
        <img src="./imagens/populares/foto-5.png"></img>
        <button>Ver mais</button>
        

</PopularEstilo>

    )

    
}


export default CardPopular;