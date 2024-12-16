import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import './assets/reset.css';
import './App.css';
import Projects from './components/Projects';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <header>
        <Header changeLanguage={changeLanguage}/>
      </header>
      <main>
        {/* Vídeo de fundo fixo */}
        <BackgroundVideo autoPlay loop muted>
          <source src="bg.mp4" type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </BackgroundVideo>

        {/* Conteúdo do site */}
        <div className="content">
          <Home/>
          <About/>
          <Skill/>
          <Projects/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

// Estilo do vídeo de fundo
const BackgroundVideo = styled.video`
  position: fixed;    /* Fixa o vídeo na tela */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;  /* Faz o vídeo cobrir toda a tela */
  z-index: -1;        /* Coloca o vídeo atrás do conteúdo */
`;

export default App;
