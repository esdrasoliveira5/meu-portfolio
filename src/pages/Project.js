import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PortfolioContext from '../context/AppContext';

function Project() {
  const { nightMode } = useContext(PortfolioContext);
  const backgroundColor = nightMode ? '#2B2D42' : 'white';
  const fontColor = nightMode ? 'white' : '#2B2D42';
  const animation = nightMode ? 'whiteToBlack' : 'BlackToWhite';
  const MainStyled = styled.main`
    display: flex;
    flex-direction: row;
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
    
    img {
          padding: 20px;
          width: 40%;
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
        width: 60%;
        h1 {
          text-align: center;
          animation:  mymy 3s ;
        }
        p{
          padding: 10px;
          width: 80%;
        }
      }

    @keyframes mymy {
      from{ transform: translate(0px, 80px);}
      to {transform: translate(0px, 0px);}
    }
  `;

  const HiddenBox = styled.div`
    width: 100%;
    overflow: hidden;
    h1 {
      font-size: 30px;
      animation:  mymy 3s ;
    }
    @keyframes mymy {
      from{ transform: translate(0px, 80px);}
      to {transform: translate(0px, 0px);}
    }
  `;
  const { projects } = useContext(PortfolioContext);
  const location = useLocation();
  const path = Number(location.pathname.split('/')[2]);
  const {
    title,
    description,
    link,
    img,
    github,
  } = projects[path - 1];
  return (
    <MainStyled>
      <Header />
      <img src={img} alt="" />
      <div>
        <HiddenBox>
          <h1>{title}</h1>
        </HiddenBox>
        <p>{description}</p>
        <a href={link}>Site</a>
        <a href={github}>GitHub</a>
      </div>
      <Footer />
    </MainStyled>
  );
}

export default Project;
