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
  `;

  const ProjectStyle = styled.div`
      @media screen and (max-width: 768px) {
      flex-direction: column;
      width: 100%;
    }
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    img {
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      padding: 20px;
      width: 70%;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
      }
      a {
        color: ${fontColor};
      }
    }
  `;

  const HiddenBox = styled.div`
    width: 100%;
    overflow: hidden;
    h1 {
      text-align: center;
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
      <ProjectStyle>
        <img src={img} alt="" />
        <div>
          <HiddenBox>
            <h1>{title}</h1>
          </HiddenBox>
          <p>{description}</p>
          <a href={link}>Site</a>
          <a href={github}>GitHub</a>
        </div>
      </ProjectStyle>
      <Footer />
    </MainStyled>
  );
}

export default Project;
