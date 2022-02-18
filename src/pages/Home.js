import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      height: 10%;
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

function Home() {
  return (
    <MainStyled>
      <Header />
      <div>
        <h3>Olá, meu nome é Esdras</h3>
        <h1>Desenvolvedor Web Fullstack, musico e um apaixonado por tecnologia.</h1>
      </div>
      <Footer />
    </MainStyled>
  );
}
export default Home;
