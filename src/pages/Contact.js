import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BodyStyled = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Contact() {
  return (
    <BodyStyled>
      <Header />
      <h1>Contact</h1>
      <Footer />
    </BodyStyled>
  );
}
export default Contact;
