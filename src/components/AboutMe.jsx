import React from 'react';
import styled from 'styled-components';

const AboutMeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 10%;
  width: 80%;
  h1 {
    text-align: center;
    animation:  mymy 3s ;
  }
  p {
    text-align: center;
  }

  @keyframes mymy {
    from{ transform: translate(0px, 150px);}
    to {transform: translate(0px, 0px);}
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

function AboutMe() {
  return (
    <AboutMeStyle>
      <HiddenBox>
        <h1>About Me</h1>
      </HiddenBox>
      <p>
        {
          `Sou um apaixonado por musica, artes e tecnologia, bacharel em musica pela Universidade Federal de Minas Gerais,
          professor e chefe de naipe com 6 anos de experiência.
          Depois de me dedicar durante anos a musica estou me voltando agora para a área da tecnologia,
          tive a oportunidade de ser aprovado no processo seletivo do curso de desenvolvimento Web da Trybe
           a onde estou estudando atualmente para me tornar um Dev Full Stack.`
        }
      </p>
    </AboutMeStyle>
  );
}

export default AboutMe;
