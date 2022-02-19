import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';

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

function About() {
  return (
    <BodyStyled>
      <Header />
      <AboutMe />
      <Skills />
      <Footer />
    </BodyStyled>
  );
}
export default About;
