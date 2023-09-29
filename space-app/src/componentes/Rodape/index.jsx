import styled from "styled-components"


const EstiloRodape = styled.footer`
display: flex;
align-items: center;
width: 100%;
height: 80px;
background-color:#04244F;
margin-top: 40px;



justify-content: space-between;






`


const EstiloIcones = styled.div`

padding: 10px;

a {

    padding: 10px;
}









`

const EstiloCreditos = styled.p`


padding-right: 20px;
color: white;
font-size: 20px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: right;





`







const Rodape = () =>{

    return (

        <EstiloRodape>

            <EstiloIcones>

                <a href="#"><img  src="/imagens/sociais/facebook.svg"></img></a>

                <a href="#"><img src="/imagens/sociais/instagram.svg"></img></a>

                <a href="#"><img src="/imagens/sociais/twitter.svg"></img></a>





               

            </EstiloIcones>

            <EstiloCreditos>
                Desenvolvido para Alura.
            </EstiloCreditos>



        </EstiloRodape>
    )

    

}


export default Rodape