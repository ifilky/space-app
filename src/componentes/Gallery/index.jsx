import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Popular from "./Popular";
import Photo from "./Photo";

const GalleryContainer = styled.div`
    display: flex;
`
const FluidSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

const Gallery = ({ photos }) => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          {photos.map(photo => <Photo key={photo.id} photo={photo} >{photo.titulo}</Photo>)}
        </FluidSection>
        <Popular>

        </Popular>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
