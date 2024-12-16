import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Section id='home'>
            <Title>{t('titleHome')}</Title>
            <SubTitle>{t('subTitleHome')}</SubTitle>
            <Profile src='https://github.com/josevanderleineto.png' alt="Home" />
            <Text>
                {t('textHome')}
            </Text>
            <a href='$'><Button>{t('cv')}</Button></a>
        </Section>
    );
}

const Section = styled.section` 
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 100px;
    height: 100vh;
`;

const Title = styled.h1`
    color: var(--color-text);
    font-size: 40px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 35px;
    }
`;

const SubTitle = styled.h2`
    color: var(--color-text);
    font-size: 24px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const moveUpDown = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

const Profile = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid transparent;
    box-shadow: 2px -3px 51px 33px rgba(27,212,212,0.85);
  -webkit-box-shadow: 2px -3px 51px 33px rgba(136, 242, 242, 0.85);
  -moz-box-shadow: 2px -3px 51px 33px rgba(87, 235, 235, 0.85);
    animation: ${moveUpDown} 2s ease-in-out infinite; /* Animação de subir e descer */

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`;

const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    font-size: 1.3rem;
    color: var(--color-text);
    margin: 20px auto; 
    text-align: justify; 
    text-justify: inter-word;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const Button = styled.button`
    justify-content: center;
    background-color: var(--bg-secondary);
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: var(--color-text);
    padding: 10px 20px;
    margin-top: 20px;
    width: 200px;
    &:hover {
        background-color: var(--bg-secondary-hover);
        transition: background-color 0.3s ease;
        font-size: 1rem;
        font-weight: bold;
    }
`;

export default Home;
