import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import brFlag from '../../assets/flags/br.png'; // Imagem da bandeira do Brasil
import ukFlag from '../../assets/flags/uk.png'; // Imagem da bandeira do Reino Unido
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Importa o hook de tradução

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <Logo>VN</Logo>
      <MenuIcon onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Menu className={isMenuOpen ? 'active' : ''}>
        <li onClick={() => console.log('Navigate to Home')}>{t('home')}</li>
        <li onClick={() => console.log('Navigate to About')}>{t('about')}</li>
        <li onClick={() => console.log('Navigate to Contact')}>{t('contact')}</li>
      </Menu>
      <LanguageButton onClick={toggleLanguage}>
        <img
          src={i18n.language === 'en' ? brFlag : ukFlag}
          alt={i18n.language === 'en' ? 'Português' : 'English'}
        />
      </LanguageButton>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #12123c;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  position: relative;
`;

const Logo = styled.h1`
  color: white;
  margin: 0;
  margin-right: auto;
`;

const MenuIcon = styled.div`
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-left: 20px;
  }
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 30px;
    height: auto;
  }
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #12123c;
    width: 200px;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 2;

    &.active {
      transform: translateX(0);
    }
  }

  li {
    padding: 20px;
    color: white;
    cursor: pointer;
    text-align: left;
  }
`;

Header.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
};

export default Header;
