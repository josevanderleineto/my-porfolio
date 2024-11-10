import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

import './assets/reset.css';
import './App.css';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Header changeLanguage={changeLanguage}/>
        <Home/>
        <About/>
    </div>
  );
}

export default App;
