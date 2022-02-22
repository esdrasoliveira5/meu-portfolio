import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioContext from '../context/AppContext';

function Home() {
  const { nightMode } = useContext(PortfolioContext);
  const backgroundColor = nightMode ? '#2B2D42' : 'white';
  const fontColor = nightMode ? 'white' : '#2B2D42';
  const animation = nightMode ? 'whiteToBlack' : 'BlackToWhite';

  const MainStyled = styled.main`
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

    div {
      @media screen and (max-width: 320px) {
        width: 100%;
      }
      @media screen and (max-width: 768px) {
        width: 80%;
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      height: 10%;
      width: 50%;
      h1 {
        text-align: center;
        animation:  mymy 3s ;
      }
    }

  @keyframes mymy {
    from{ transform: translate(0px, 150px);}
    to {transform: translate(0px, 0px);}
  }
`;
  return (
    <MainStyled>
      <Header />
      <div>
        <h3>Olá, meu nome é Esdras Oliveira.</h3>
        <h1>Desenvolvedor Web Fullstack, músico e um apaixonado por tecnologia.</h1>
      </div>
      <Footer />
    </MainStyled>
  );
}
export default Home;
