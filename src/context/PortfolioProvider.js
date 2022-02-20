import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import PortfolioContext from './AppContext';
import Image from '../img/photo-1487837647815-bbc1f30cd0d2.jpeg';
import ToDo1 from '../img/ToDo1.png';

function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'To-do List',
      description: 'App To-do List',
      link: 'https://to-do-list-ten-ashen.vercel.app/',
      img: ToDo1,
    },
    {
      id: 2,
      title: 'titulo',
      description: 'descricao',
      link: 'www.alguma.coisa',
      img: Image,
    },
    {
      id: 3,
      title: 'titulo',
      description: 'descricao',
      link: 'www.alguma.coisa',
      img: Image,
    },
    {
      id: 4,
      title: 'titulo',
      description: 'descricao',
      link: 'www.alguma.coisa',
      img: Image,
    },
    {
      id: 5,
      title: 'titulo',
      description: 'descricao',
      link: 'www.alguma.coisa',
      img: Image,
    },
    {
      id: 6,
      title: 'titulo',
      description: 'descricao',
      link: 'www.alguma.coisa',
      img: Image,
    },
  ]);

  const contextValue = useMemo(() => ({ projects, setProjects }), []);

  return (
    <PortfolioContext.Provider value={contextValue}>
      { children }
    </PortfolioContext.Provider>
  );
}

PortfolioProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default PortfolioProvider;
