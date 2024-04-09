import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Popular from "./Popular";
import Photo from "./Photo";

const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImagesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Gallery = ({ photos = [], toSelectedPhoto }) => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImagesContainer>
            {photos.map((photo) => (
              <Photo
                toSelectedZoom={toSelectedPhoto}
                key={photo.id}
                photo={photo}>
                {photo.titulo}
              </Photo>
            ))}
          </ImagesContainer>
        </FluidSection>
        <Popular></Popular>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
