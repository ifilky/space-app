import Title from "../../Title";
import styled from "styled-components";

import photos from "./fotos-populares.json";

const PopularContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  & > img{
    border-radius: 20px;
    max-width: 212px;
  }
`;

const Button = styled.button`
  background: transparent;
  color: #FFFFFF;
  border: 2px solid #C98CF1;
  padding: 14px 28px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 24px;
`

const Popular = () => {
  return (
    <>
      <PopularContainer>
        <Title $alignment="center">Populares</Title>
        <ImagesContainer>
          {photos.map((photo) => (
            <img key={photo.id} src={photo.path} alt="foto popular" />
          ))}
        </ImagesContainer>
        <Button>
          Ver mais
        </Button>
      </PopularContainer>
    </>
  );
};

export default Popular;
