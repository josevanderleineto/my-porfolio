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

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    `

const Title = styled.h1`
    font-size: 32px;
    margin-top: 40px;
    margin-bottom: 20px;
`;


const Paragraph = styled.p``;


export default About;