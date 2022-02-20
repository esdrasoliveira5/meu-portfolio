import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BodyStyled = styled.main`
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

const ContactBoxStyled = styled.div`
  @media screen and (max-width: 320px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  a{
    font-size: 200%;
    color: #023047
  }
  div {
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    a:hover {
      transform: scale(1.5);
      transition: all .5s ease-in-out;
    }
  }
`;

function Contact() {
  return (
    <BodyStyled>
      <Header />
      <HiddenBox>
        <h1>Contact</h1>
      </HiddenBox>
      <p>Entre em contato comigo por email ou pelas redes sociais.</p>
      <ContactBoxStyled>
        <a href="mailto:esdrasjesus5@gmail.com">esdrasjesus5@gmail.com</a>
        <div>
          <a href="https://twitter.com/esdrasmoliveira" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="esdrasmoliveira" height="30" width="40" /></a>
          <a href="https://linkedin.com/in/esdrasmoliveira" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="esdrasmoliveira" height="30" width="40" /></a>
          <a href="https://stackoverflow.com/users/18234803" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="18234803" height="30" width="40" /></a>
          <a href="https://fb.com/esdras.dejesus" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="esdras.dejesus" height="30" width="40" /></a>
          <a href="https://instagram.com/esdrasm.oliveira" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="esdrasm.oliveira" height="30" width="40" /></a>
        </div>
      </ContactBoxStyled>
      <Footer />
    </BodyStyled>
  );
}
export default Contact;
