import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const StylizedList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const SideBar = () => {
    return (
        <aside>
            <nav>
                <StylizedList>
                    <NavigationItem
                    iconeAtivo="/icones/home-ativo.png"
                    iconeInativo="/icones/home-inativo.png"
                    ativo={true}
                    >
                        Início
                    </NavigationItem>
                    <NavigationItem
                    iconeAtivo="/icones/mais-vistas-ativo.png"
                    iconeInativo="/icones/mais-vistas-inativo.png"
                    ativo={false}
                    >
                        Mais vistas
                    </NavigationItem>
                    <NavigationItem
                    iconeAtivo="/icones/mais-curtidas-ativo.png"
                    iconeInativo="/icones/mais-curtidas-inativo.png"
                    ativo={false}
                    >
                        Mais curtidas
                    </NavigationItem>
                    <NavigationItem
                    iconeAtivo="/icones/novas-ativo.png"
                    iconeInativo="/icones/novas-inativo.png"
                    ativo={false}
                    >
                        Novas
                    </NavigationItem>
                    <NavigationItem
                    iconeAtivo="/icones/surpreenda-me-ativo.png"
                    iconeInativo="/icones/surpreenda-me-inativo.png"
                    ativo={false}
                    >
                        Surpreenda-me  
                    </NavigationItem>
                </StylizedList>
            </nav>
        </aside>
    )
}

export default SideBar;