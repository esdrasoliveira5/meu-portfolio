import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import PortfolioContext from '../context/AppContext';

function About() {
  const { nightMode } = useContext(PortfolioContext);
  const backgroundColor = nightMode ? '#2B2D42' : 'white';
  const fontColor = nightMode ? 'white' : '#2B2D42';
  const animation = nightMode ? 'whiteToBlack' : 'BlackToWhite';

  const BodyStyled = styled.main`
  padding-top: 150px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background-color: ${backgroundColor};
  color: ${fontColor};

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

  const HiddenBox = styled.div`
    overflow: hidden;
    h1 {
      font-size: 50px;
      animation:  mymy 3s ;
    }
    @keyframes mymy {
      from{ transform: translate(0px, 150px);}
      to {transform: translate(0px, 0px);}
    }
  `;

  return (
    <BodyStyled>
      <Header />
      <HiddenBox>
        <h1>About me</h1>
      </HiddenBox>
      <AboutMe />
      <Skills />
      <Footer />
    </BodyStyled>
  );
}
export default About;
