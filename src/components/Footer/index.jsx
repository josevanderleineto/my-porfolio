import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
    const { t } = useTranslation();

    return (
        <FooterContainer id='contacts'>
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
            <FooterContact>
                <ContactItem>
                    <Email href="mailto:jv.neto@outlook.com.be"><FaEnvelope /> {t('footer.text1')}</Email>
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
            color: var(--bg-gray); /* Ajuste a cor conforme desejado para o hover */
        }
    }
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

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

const Email = styled.a`
    color: var(--color-text);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: var(--bg-gray); /* Ajuste a cor conforme desejado para o hover */
    }
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.3rem;
`;

const FooterText = styled.p`
    margin: 0;
    font-size: 1.5rem;
`;

// Duplicate declaration removed

export default Footer;
