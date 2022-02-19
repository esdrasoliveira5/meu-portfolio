import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b2d42;
  height: 80px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return (
    <FooterStyle>
      <p>2022 Design & build by Esdras Oliveira</p>
    </FooterStyle>
  );
}

export default Footer;
