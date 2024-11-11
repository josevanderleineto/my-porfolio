import { useState, useEffect } from 'react';
import styled from 'styled-components';
import brFlag from '../../assets/flags/br.png';
import ukFlag from '../../assets/flags/uk.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logo from '../../../public/Logo_Vanderlei.svg';

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

  // Fechar o menu ao clicar fora ou no ícone de "X"
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.menu, .menu-icon')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <Nav>
      <Logo src={logo}></Logo>
      <MenuIcon onClick={toggleMenu} className="menu-icon">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Menu className={`menu ${isMenuOpen ? 'active' : ''}`}>
        
        <li>
          <StyledAnchor href="#home">{t('home')}</StyledAnchor>
        </li>
        <li>
          <StyledAnchor href="#about">{t('about')}</StyledAnchor>
        </li>
        <li>
          <StyledAnchor href="#contact">{t('contact')}</StyledAnchor>
        </li>
        <LanguageButton onClick={toggleLanguage}>
          <img
            src={i18n.language === 'en' ? brFlag : ukFlag}
            alt={i18n.language === 'en' ? 'Português' : 'English'}
          />
        </LanguageButton>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--bg-secondary);
  width: 100%;
  padding: 10px 20px;
  position: relative;
`;

const Logo = styled.img`
  width: 90px;
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
    height: 300px;
    background-color: var(--bg-secondary);
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
    text-align: left;
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: var(--color-text);
  cursor: pointer;

  &:hover {
    color: var(--color-hover);
  }
`;

export default Header;
