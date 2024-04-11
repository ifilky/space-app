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
                    iconeAtivo="/public/icones/home-ativo.png"
                    iconeInativo="/public/icones/home-inativo.png"
                    ativo={true}
                    >
                        Início
                    </NavigationItem>
                    <NavigationItem
                    iconeAtivo="/public/icones/mais-vistas-ativo.png"
                    iconeInativo="/public/icones/mais-vistas-inativo.png"
                    ativo={false}
                    >
                        Mais vistas
                    </NavigationItem>
                    <NavigationItem
                    iconeAtivo="/public/icones/mais-curtidas-ativo.png"
                    iconeInativo="/public/icones/mais-curtidas-inativo.png"
                    ativo={false}
                    >
                        Mais curtidas
                    </NavigationItem>
                    <NavigationItem
                    iconeAtivo="/public/icones/novas-ativo.png"
                    iconeInativo="/public/icones/novas-inativo.png"
                    ativo={false}
                    >
                        Novas
                    </NavigationItem>
                    <NavigationItem
                    iconeAtivo="/public/icones/surpreenda-me-ativo.png"
                    iconeInativo="/public/icones/surpreenda-me-inativo.png"
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