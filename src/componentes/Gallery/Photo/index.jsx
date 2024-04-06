import styled from "styled-components";

const CardContainer = styled.figure`
    width: 400px;
    background: #001634;
`

const Image = styled.img`
    border-radius: 20px 20px 0 0;
`

const FigureCaption = styled.figcaption`
`

const Photo = ({ photo }) => {
  return (
    <CardContainer>
      <Image src={photo.path} alt="Fotografia da constelação" />
      <FigureCaption>
        <h3>{photo.titulo}</h3>
        <footer>
            <p>{photo.fonte}</p>
            <button>Favoritar</button>
            <button>Expandir</button>
        </footer>
      </FigureCaption>
    </CardContainer>
  );
};

export default Photo;
