import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BodyStyled = styled.main`
  padding-top: 150px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
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

const CardBoxStyled = styled.div`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;

`;

const CardStyled = styled.div`
  @media screen and (max-width: 1500px) {
    width: 48%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  width: 30%;
  height: 250px;
  margin: 5px;
  background-image: linear-gradient(rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)), url(https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60);
  overflow: hidden!important;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
    div {
      font-family: Open Sans;
      text-align: center;
      padding: 10px;
      opacity: 0;
      transition: all .5s ease-in-out;
      transform: translateY(20px);
      cursor: pointer;
      a   {
        background-color: #000;
        color: #fff;
        padding: 10px;
        text-decoration: none;
      }
    }
    div:hover {
      opacity: 100;
    }
`;

function Work() {
  return (
    <BodyStyled>
      <Header />
      <HiddenBox>
        <h1>Work</h1>
      </HiddenBox>
      <p>Esses sao alguns dos projetos que tive p prazer de desenvolver.</p>
      <CardBoxStyled>
        <CardStyled>
          <div>
            <h1>TITULO</h1>
            <p>texto</p>
            <a href="http://chetanverma.com/" target="_blank" rel="noopener noreferrer">
              Explore
            </a>
          </div>
        </CardStyled>
        <CardStyled>
          <div>
            <h1>TITULO</h1>
            <p>texto</p>
            <a href="http://chetanverma.com/" target="_blank" rel="noopener noreferrer">
              Explore
            </a>
          </div>
        </CardStyled>
        <CardStyled>
          <div>
            <h1>TITULO</h1>
            <p>texto</p>
            <a href="http://chetanverma.com/" target="_blank" rel="noopener noreferrer">
              Explore
            </a>
          </div>
        </CardStyled>
        <CardStyled>
          <div>
            <h1>TITULO</h1>
            <p>texto</p>
            <a href="http://chetanverma.com/" target="_blank" rel="noopener noreferrer">
              Explore
            </a>
          </div>
        </CardStyled>
        <CardStyled>
          <div>
            <h1>TITULO</h1>
            <p>texto</p>
            <a href="http://chetanverma.com/" target="_blank" rel="noopener noreferrer">
              Explore
            </a>
          </div>
        </CardStyled>
        <CardStyled>
          <div>
            <h1>TITULO</h1>
            <p>texto</p>
            <a href="http://chetanverma.com/" target="_blank" rel="noopener noreferrer">
              Explore
            </a>
          </div>
        </CardStyled>
      </CardBoxStyled>
      <Footer />
    </BodyStyled>
  );
}
export default Work;
