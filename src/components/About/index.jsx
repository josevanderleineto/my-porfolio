import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const About = () => {
    const { t } = useTranslation();

    

    return (
        <Section id='about'>
            <Title>{t('titleAbout')}</Title>
            <Paragraph>{t('textAbout')}</Paragraph><br></br>   
            <Paragraph>{t('textAbout2')}</Paragraph>         
        </Section>
    );

}

const Title = styled.h1`
    font-size: 32px;
    margin-top: 40px;
    margin-bottom: 20px;
`;

const Section = styled.section`
    padding: 40px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    
    `




const Paragraph = styled.p`
    font-size: 1.5rem;
    color: var(--color-text);
    margin: 20px auto;
    padding:  0 70px 0 70px;

    @media (max-width: 768px) {
        padding: 0 20px 0 20px;
        font-size: 1rem;
    }
`;




export default About;