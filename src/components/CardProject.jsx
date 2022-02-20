import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
        padding: 5px;
        text-decoration: none;
      }
    }
    div:hover {
      opacity: 100;
    }
`;
function CardProject({ project: { id, title, img } }) {
  return (
    <CardStyled style={{ backgroundImage: `url(${img})` }}>
      <div>
        <h1>{title}</h1>
        <Link to={`/project/${id}`}>
          Explorar
        </Link>
      </div>
    </CardStyled>
  );
}

CardProject.propTypes = {
  project: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CardProject;
