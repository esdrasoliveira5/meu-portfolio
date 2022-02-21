import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioContext from '../context/AppContext';

function Contact() {
  const { nightMode } = useContext(PortfolioContext);
  const backgroundColor = nightMode ? '#2B2D42' : 'white';
  const fontColor = nightMode ? 'white' : '#2B2D42';
  const animation = nightMode ? 'whiteToBlack' : 'BlackToWhite';

  const BodyStyled = styled.main`
  display: flex;
  flex-direction: column;
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
  p {
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
    from{ transform: translate(0px, 80px);}
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
    font-size: 1.5rem;
    color: ${fontColor}
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
          <a href="https://github.com/esdrasoliveira5" target="blank"><img align="center" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="esdrasm.oliveira" height="30" width="30" /></a>
        </div>
      </ContactBoxStyled>
      <Footer />
    </BodyStyled>
  );
}
export default Contact;
