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

// import Contacts from './components/Contacts';

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
        <Home/>
        <About/>
        <Skill/>
        <Projects/>
        {/* <Contacts/>  */}
      </main>
        
        <Footer/>
    </div>
  );
}

export default App;
