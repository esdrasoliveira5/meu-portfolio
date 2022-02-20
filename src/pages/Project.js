import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PortfolioContext from '../context/AppContext';

const MainStyled = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  
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
    from{ transform: translate(0px, 150px);}
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
    from{ transform: translate(0px, 150px);}
    to {transform: translate(0px, 0px);}
  }
`;

function Project() {
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
