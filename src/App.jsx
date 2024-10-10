import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import './assets/reset.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Header changeLanguage={changeLanguage} />
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}

export default App;
