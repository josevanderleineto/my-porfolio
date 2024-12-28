import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import BinaryAnimation from './components/BinaryAnimation'; // Importa o componente
import './assets/reset.css';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <header>
        <Header changeLanguage={changeLanguage} />
      </header>
      <main>
        {/* Componente de animação */}
        <BinaryAnimation />
        
        {/* Conteúdo do site */}
        <div className="content">
          <Home />
          <About />
          <Skill />
          <Projects />
          <Contacts />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
