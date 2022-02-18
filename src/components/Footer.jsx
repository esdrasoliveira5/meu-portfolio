import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b2d42;
  height: 100px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return (
    <FooterStyle>
      <h1>Footer</h1>
    </FooterStyle>
  );
}

export default Footer;
