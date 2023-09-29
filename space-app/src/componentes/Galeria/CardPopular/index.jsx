import styled from "styled-components";

import fotos from './fotos-populares.json'

const PopularEstilo = styled.section`

display: flex;
flex-direction: column;
gap: 24px;
margin-left: -38px;







img {
   
    max-width: 212px;
    height: 158px;
    border-radius: 20px;
}


button {

    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;




 
}

button:hover {

    border-color: white;
   
}



`


const CardPopular = () => {


    return (
<PopularEstilo>

        {fotos.map(foto => <img key={foto.id} src={foto.path} alt={foto.alt}></img>)}
        <button>Ver mais</button>
        

</PopularEstilo>

    )

    
}


export default CardPopular;