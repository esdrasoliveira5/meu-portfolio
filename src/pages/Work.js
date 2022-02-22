import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioContext from '../context/AppContext';
import CardProject from '../components/CardProject';

function Work() {
  const { projects } = useContext(PortfolioContext);
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
    p{
      text-align: center;
    }
  `;

  const HiddenBox = styled.div`
    overflow: hidden;
    h1 {
      font-size: 50px;
      animation:  mymy 3s ;
    }
    @keyframes mymy {
      from{ transform: translate(0px, 80px);}
      to {transform: translate(0px, 0px);}
    }
  `;

  const CardBoxStyled = styled.div`
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    color: #2B2D42;
    overflow: hidden;
  `;
  return (
    <BodyStyled>
      <Header />
      <HiddenBox>
        <h1>Works</h1>
      </HiddenBox>
      <p>Esses são alguns dos projetos que desenvolvi.</p>
      <CardBoxStyled>
        {
          projects.map((project) => <CardProject project={project} />)
        }
      </CardBoxStyled>
      <Footer />
    </BodyStyled>
  );
}
export default Work;
