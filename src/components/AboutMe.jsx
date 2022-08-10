import React from 'react';
import styled from 'styled-components';
import MeImg from '../img/IMG_20210811_113245.jpg';

const AboutMeStyle = styled.div`
  @media screen and (max-width: 320px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }

  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 10%;
  width: 60%;

  img {
    @media screen and (max-width: 320px) {
    width: 80%;
    }
    @media screen and (max-width: 768px) {
    width: 70%;
    }
    @media screen and (min-width: 1200px) {
    width: 40%;
    }
    width: 60%;
    margin: 20px;
  }
  h1 {
    text-align: center;
    animation:  mymy 3s ;
    margin: 20px;
  }
  p {
    text-align: center;
  }

  @keyframes mymy {
    from{ transform: translate(0px, 80px);}
    to {transform: translate(0px, 0px);}
  }
`;

function AboutMe() {
  return (
    <AboutMeStyle>
      <img src={MeImg} alt="" />
      <p>
        Sou um apaixonado por música, artes e tecnologia,
        bacharel em música pela Universidade Federal de Minas Gerais,
        professor e chefe de naipe com 6 anos de experiência.
        Após me dedicar durante anos a música iniciei uma nova carreira na área da tecnologia,
        me formei na Trybe uma escola de formação de profissionais de tecnologia voltada para o
        desenvolvimento Web e atuo profissionalmente como desenvolvedor Full Stack.
      </p>
    </AboutMeStyle>
  );
}

export default AboutMe;
