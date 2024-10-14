import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Section>
            <Title>{t('titleHome')}</Title>
            <SubTitle>{t('subTitleHome')}</SubTitle>
            <Profile src='https://github.com/josevanderleineto.png' alt="Home" />
            <Text>
                <p>{t('textHome')}</p>
            </Text>
            <Button>{t('cv')}</Button>


        </Section>
    );
}
const Section = styled.section` 
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #06415A;
    padding-top: 100px;
    height: 100vh;

    
`;

const Title = styled.h1`
    color: white;
    font-size: 32px;
    margin-bottom: 20px;
    `;


const SubTitle = styled.h2`
    color: white;
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
    color: white;
    margin: 20px auto; /* centraliza o componente Text na tela */
    text-align: justify; /* justifica o texto */
    text-justify: inter-word;
    `;



const Button = styled.button`
    justify-content: center;
    background-color:  #12123c;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    padding: 10px 20px;
    margin-top: 20px;
    width: 200px;
    &:hover {
        background-color: #22123c;
        transition: background-color 0.3s ease;
        font-size: 1rem;
        font-weight: bold;
    }

    `    


export default Home;