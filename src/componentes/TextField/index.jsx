import styled from "styled-components"
import search from "./search.png";

const StylizedContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const TextInput = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const SearchIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const TextField = (props) => {
    return (
        <StylizedContainer>
            <TextInput
                onChange={event => props.setFilter(event.target.value)}
                placeholder="O que você procura?"
                {...props}
                />
            <SearchIcon src={search} alt="ícone de lupa" />
        </StylizedContainer>
    )
}

export default TextField;