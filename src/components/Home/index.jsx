import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import  cv from '../../assets/cv.png';

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

        </Section>
    );
}
const Section = styled.section` 
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #06415A;
    padding-top: 50px;
    box-sizing: border-box;
    width: 100%;
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
    width: 200px;
    height: 200px;
    border-radius: 50%;
    `;


const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    font-size: 1.5rem;
    color: white;
    margin-top: 20px;
`;


export default Home;