import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioContext from '../context/AppContext';
import CardProject from '../components/CardProject';

const BodyStyled = styled.main`
  padding-top: 150px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
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

function Work() {
  const { projects } = useContext(PortfolioContext);
  return (
    <BodyStyled>
      <Header />
      <HiddenBox>
        <h1>Works</h1>
      </HiddenBox>
      <p>Esses sao alguns dos projetos que desenvolvi.</p>
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
