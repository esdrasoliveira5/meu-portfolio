import React, { useContext } from 'react';
import styled from 'styled-components';
import PortfolioContext from '../context/AppContext';

function Footer() {
  const { nightMode } = useContext(PortfolioContext);
  const backgroundColor = !nightMode ? '#2B2D42' : 'white';
  const fontColor = !nightMode ? 'white' : '#2B2D42';
  const animation = !nightMode ? 'whiteToBlack' : 'BlackToWhite';

  const FooterStyle = styled.footer`
  color: ${fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${backgroundColor};
  height: 80px;
  position: absolute;
  bottom: 0;
  width: 100%;

  animation: ${animation} 3s;
  @keyframes whiteToBlack {
    from {background-color: white;}
    to {background-color: #2B2D42;}
  }
  @keyframes BlackToWhite {
    from {background-color: #2B2D42;}
    to {background-color: white;}
  }
  `;
  return (
    <FooterStyle>
      <p>2022 Design & build by Esdras Oliveira</p>
    </FooterStyle>
  );
}

export default Footer;
