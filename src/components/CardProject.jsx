import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CardProject({ project: { id, title, img } }) {
  const CardStyled = styled.div`
  @media screen and (max-width: 1500px) {
      width: 48%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  width: 30%;
  height: 250px;
  overflow: hidden;
  margin: 10px;
  margin: 5px;
  display: flex;
  div {
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    width: 100%;
    height: 100%;
    transition: all .5s ease-in-out;
    cursor: pointer;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      opacity: 0;
      font-size: 11px;
      transition: all .5s ease-in-out;
      text-decoration: none;
      color: #2B2D42;
    }
    span {
      padding: 3px;
      background-color: #2B2D42;
      color: white;
    }
    a:hover {
      opacity: 100;
      background-color: rgb(237, 242, 244,0.4);
    }
  }
  div:hover {
    transform: scale(1.5);
  }
`;
  return (
    <CardStyled>
      <div>
        <Link to={`/project/${id}`}>
          <h1>{title}</h1>
          <span>
            Explorar
          </span>
        </Link>
      </div>
    </CardStyled>
  );
}

CardProject.propTypes = {
  project: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CardProject;
