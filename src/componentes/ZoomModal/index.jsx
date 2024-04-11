import IconButton from "../../IconButton";
import Photo from "../Gallery/Photo";
import styled from "styled-components";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StylizedDialog = styled.dialog`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 294px;
  background: transparent;
  width: 1156px;
  padding: 0;
  border: none;
  & > form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ZoomModal = ({ photo, toClose, toToggleFavorite}) => {
  return (
    <>
      {photo && (
        <>
          <Overlay />
          <StylizedDialog open={!!photo} onClose={toClose}>
            <Photo photo={photo} expanded={true} toToggleFavorite={toToggleFavorite} />
            <form method="dialog">
              <IconButton formMethod="dialog">
                <img src="/public/icones/fechar.png" alt="botao de fechar" />
              </IconButton>
            </form>
          </StylizedDialog>
        </>
      )}
    </>
  );
};

export default ZoomModal;
