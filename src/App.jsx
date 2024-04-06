import styled from "styled-components";
import GlobalStyles from "./componentes/GlobalStyles";
import Header from "./componentes/Header";
import SideBar from "./componentes/SideBar";
import Banner from "./componentes/Banner";
import Gallery from "./componentes/Gallery";

import fotos from "./fotos.json";
import { useState } from "react";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {

  const [galleryPhotos,setGalleryPhotos] = useState(fotos);

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              backgroundImage="/src/assets/banner.png"
            />
            <Gallery photos={galleryPhotos} />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
    </GradientBackground>
  );
}

export default App;