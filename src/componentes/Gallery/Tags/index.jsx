import styled from 'styled-components';
import tags from './tags.json'

const TagContainer = styled.div`
    display: flex;
    margin-top: 50px;
    align-items: center;
    gap: 24px;
`

const Description = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0 17px 0 0;
`

const Button = styled.button`
    font-size: 24px;
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    background:rgba(217, 217, 217, 0.3);
    padding: 8px 10px;
    transition: background-color 0.3s ease;
    box-sizing: border-box;
    border: 2px solid transparent;
    cursor: pointer;
    &:hover {
      border-color: #C98CF1;
    }
`

const Tags = ({ setTag }) => {
  return (
    <TagContainer>
      <Description>Busque por tags:</Description>
      {tags.map(tag => <Button onClick={() => setTag(tag.tag)} key={tag.id}>{tag.titulo}</Button>)}
    </TagContainer>
  );
};

export default Tags;
