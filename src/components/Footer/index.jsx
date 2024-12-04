import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <FooterContainer id='contacts'>
            <FooterTitle>{t('footer.title')}</FooterTitle>
            <FooterContact>
                <ContactItem>
                    <FaEnvelope /> {t('footer.text1')}
                </ContactItem>
                <ContactItem>
                    <FaPhone /> {t('footer.text2')}
                </ContactItem>
                <ContactItem>
                    <FaMapMarkerAlt /> {t('footer.text3')}
                </ContactItem>
            </FooterContact>
            <FooterText>{t('footer.text')}</FooterText>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    background-color: var(--bg-secondary);
    color: #fff;
    padding: 2rem 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const FooterTitle = styled.h3`
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
`;

const FooterContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 1.5rem;
    }
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
`;

const FooterText = styled.p`
    margin: 0;
    font-size: 0.875rem;
`;

export default Footer;
