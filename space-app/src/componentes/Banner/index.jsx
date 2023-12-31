import styled from "styled-components";

 const BannerEstilo = styled.div`


background-image: ${props => `url(${props.$backgroundImage})`};
flex-grow: 1;
background-repeat: no-repeat;
display: flex;
align-items: center;
min-height: 320px;
margin: 0;
border-radius: 20px;

width: 105%;
background-size: cover;

 
 
 `

 const TituloEstilo = styled.h1`
    
font-weight: 400px;
font-size: 40px;
line-height: 40px;
color: #FFFFFF;
max-width: 300px;
padding: 0 64px;


 `

 
 
 
 
 
 
 const Banner = ({texto, backgroundImage}) => {

    return (  
        <BannerEstilo $backgroundImage={backgroundImage}>
            <TituloEstilo>{texto}</TituloEstilo>
            
        </BannerEstilo>

        

    )
 }

 export default Banner;