import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
        <h1>{t('title')}</h1>
        <p>{t('text')}</p>
        </div>
    );
}

export default Home;