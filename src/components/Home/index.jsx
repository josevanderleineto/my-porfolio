import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

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
            <SocialIcon>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaSquareInstagram />
                </a>
            </SocialIcon>
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

const SocialIcon = styled.div`
    display: flex;
    gap: 35px; /* Adiciona espaço entre os ícones */
    color: var(--color-text);
    font-size: 40px;
    margin: 40px 0;

    a {
        color: inherit;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
            color: var(--bg-secondary-hover); /* Ajuste a cor conforme desejado para o hover */
        }
    }
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

const Profile = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;

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
