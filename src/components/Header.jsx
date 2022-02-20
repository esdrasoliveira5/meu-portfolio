import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>Portfólio</h1>
      <Link
        style={{ textDecoration: 'none', color: '#023047' }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{ textDecoration: 'none', color: '#023047' }}
        to="/work"
      >
        Work
      </Link>
      <Link
        style={{ textDecoration: 'none', color: '#023047' }}
        to="/about"
      >
        About
      </Link>
      <Link
        style={{ textDecoration: 'none', color: '#023047' }}
        to="/contact"
      >
        Contact
      </Link>
    </HeaderStyled>
  );
}

export default Header;
