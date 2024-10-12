import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Home from './components/Home';
import './assets/reset.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Header changeLanguage={changeLanguage} />
       <Home>{t('home')}</Home>
    </div>
  );
}

export default App;
