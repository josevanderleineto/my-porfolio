import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

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
            <Button>{t('cv')}</Button>
        </Section>
    );
}
const Section = styled.section` 
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--bg-primary);
    padding-top: 100px;
    height: 100vh;

    
`;

const Title = styled.h1`
    color: var(--color-text);
    font-size: 32px;
    margin-bottom: 20px;
    `;


const SubTitle = styled.h2`
    color: var(--color-text);
    font-size: 24px;
    margin-bottom: 20px;
    `;

const Profile = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    `;
 const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    font-size: 1.5rem;
    color: var(--color-text);
    margin: 20px auto; 
    text-align: justify; 
    text-justify: inter-word;

    `;



const Button = styled.button`
    justify-content: center;
    background-color:  var(--bg-secondary);
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

  

    `    


export default Home;