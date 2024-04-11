import styled from "styled-components";
import IconButton from "../../../IconButton";

const CardContainer = styled.figure`
  width: ${(props) => (props.$expanded ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

const FigureCaption = styled.figcaption`
  background-color: #001634;
  color: #ffffff;
  font-family: "GandhiSansRegular";
  border-radius: 0 0 20px 20px;
  box-sizing: border-box;
  padding: 12px;

  h3 {
    font-family: "GandhiSansBold";
  }

  h4 {
    flex-grow: 1;
  }
  h3,
  h4 {
    margin: 0;
    font-size: 16px;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Photo = ({ photo, expanded = false, toSelectedZoom, toToggleFavorite }) => {

  const favoriteIcon = photo.favorite ? "/public/icones/favorito-ativo.png" : "/public/icones/favorito.png"

  return (
    <CardContainer $expanded={expanded} id={`foto-${photo.id}`}>
      <img src={photo.path} alt={photo.alt} />
      <FigureCaption>
        <h3>{photo.titulo}</h3>
        <Footer>
          <h4>{photo.fonte}</h4>
          <IconButton onClick={() => toToggleFavorite(photo)}>
            <img src={favoriteIcon} alt="Icone de favorito" />
          </IconButton>
          {!expanded && (
            <IconButton aria-hidden={expanded} onClick={() => toSelectedZoom(photo)}>
              <img src="/public/icones/expandir.png" alt="Icone de expandir" />
            </IconButton>
          )}
        </Footer>
      </FigureCaption>
    </CardContainer>
  );
};

export default Photo;
