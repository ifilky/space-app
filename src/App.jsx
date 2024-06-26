import styled from "styled-components";
import GlobalStyles from "./componentes/GlobalStyles";
import Header from "./componentes/Header";
import SideBar from "./componentes/SideBar";
import Banner from "./componentes/Banner";
import Gallery from "./componentes/Gallery";
import Footer from "./componentes/Footer"
import bannerBackground from "./assets/banner.png"

import photos from "./fotos.json";
import { useEffect, useState } from "react";
import ZoomModal from "./componentes/ZoomModal";

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
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState("");
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const filteredPhotos = photos.filter((photo) => {
      const filterByTag = !tag || photo.tagId === tag;
      const filterByTitle =
        !filter || photo.titulo.toLowerCase().includes(filter.toLowerCase());
      return filterByTag && filterByTitle;
    });
    setGalleryPhotos(filteredPhotos);
  }, [filter, tag]);

  const toToggleFavorite = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite,
      });
    }
    setGalleryPhotos(
      galleryPhotos.map((galleryPhoto) => {
        return {
          ...galleryPhoto,
          favorite:
            galleryPhoto.id === photo.id
              ? !photo.favorite
              : galleryPhoto.favorite,
        };
      })
    );
  };

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header
          filter={filter}
          setFilter={setFilter} />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Gallery
              toSelectedPhoto={(photo) => setSelectedPhoto(photo)}
              toToggleFavorite={toToggleFavorite}
              photos={galleryPhotos}
              setTag={setTag}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <Footer/>
      <ZoomModal
        photo={selectedPhoto}
        toClose={() => setSelectedPhoto(null)}
        toToggleFavorite={toToggleFavorite}
      />
    </GradientBackground>
  );
};

export default App;
