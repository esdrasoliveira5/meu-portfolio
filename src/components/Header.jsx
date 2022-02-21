import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PortfolioContext from '../context/AppContext';
import Switch from './Switch';

function Header() {
  const { nightMode } = useContext(PortfolioContext);
  const backgroundColor = nightMode ? '#2B2D42' : 'white';
  const fontColor = nightMode ? 'white' : '#2B2D42';
  const animation = nightMode ? 'whiteToBlack' : 'BlackToWhite';

  const HeaderStyled = styled.header`
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    z-index: 1;
    background-color: ${backgroundColor};
    color:${fontColor};
    animation: ${animation} 3s;
    nav {
      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
      display: flex;
      justify-content: space-around;
      flex-grow: 6;
    }
    @keyframes whiteToBlack {
      from {background-color: white;}
      to {background-color: #2B2D42;}
    }
    @keyframes BlackToWhite {
      from {background-color: #2B2D42;}
      to {background-color: white;}
    }
    a {
      text-decoration: none;
      color: ${fontColor};
    }
  `;
  return (
    <HeaderStyled>
      <h1>Portfólio</h1>
      <nav>
        <Link
          to="/"
        >
          Home
        </Link>
        <Link
          to="/work"
        >
          Work
        </Link>
        <Link
          to="/about"
        >
          About
        </Link>
        <Link
          to="/contact"
        >
          Contact
        </Link>
      </nav>
      <Switch />
    </HeaderStyled>
  );
}

export default Header;
