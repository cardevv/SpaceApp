import {styled} from 'styled-components'
import ItemNavegacao from '../ItemLista/ItemNavegacao'


const EstiloBarra = styled.ul `



list-style: none;
padding: 0;
margin: 0;
width: 212px;




`




const BarraLateral = () => {

return (


    <aside>
        <nav>
             <EstiloBarra>
                    <ItemNavegacao
                    iconeAtivo="/icones/home-ativo.png"
                    iconeInativo="/icones/home-inativo.png"
                    ativo={true}
                    >
                        Inicío
                   
                    </ItemNavegacao>
                    <ItemNavegacao
                    iconeAtivo="/icones/mais-vistas.png"
                    iconeInativo="/icones/mais-vistas-inativo.png"
                    ativo={false}
                    >
                        Mais vistas
                   
                    </ItemNavegacao>
                      
                    
                    
                
                </EstiloBarra>     
        </nav>
    </aside>

)


}

export default BarraLateral