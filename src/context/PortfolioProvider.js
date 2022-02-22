import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import PortfolioContext from './AppContext';
import Image from '../img/photo-1487837647815-bbc1f30cd0d2.jpeg';
import ToDo1 from '../img/ToDo1.png';
import ToDoB from '../img/ToDoB.png';

function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'To-do List Front-end',
      description: `Um simples app to-do list,
       a onde você cria uma conta e armazena tarefas. 
       Foram utilizados a ferramenta Rect.js e o styled-components para a parte visual, 
       ele se comunica com um back-end através de requisições a Api.`,
      link: 'https://to-do-list-ten-ashen.vercel.app/',
      img: ToDo1,
      github: 'https://github.com/esdrasoliveira5/To-do-list',
    },
    {
      id: 2,
      title: 'To-do List Back-end',
      description: `Uma api RESTful feita com node.js que se comunica 
      com um banco de dados PostgreSql através do Sequelize ORM e faz 
      validações de permissão de usuário por token com o JWT.`,
      link: 'https://to-do-list-back-end-3456.herokuapp.com/',
      img: ToDoB,
      github: 'https://github.com/esdrasoliveira5/to-do-list-backend',
    },
    {
      id: 3,
      title: 'titulo',
      description: 'descricao',
      link: 'www.alguma.coisa',
      img: Image,
      github: '',
    },
    {
      id: 4,
      title: 'titulo',
      description: 'descricao',
      link: 'www.alguma.coisa',
      img: Image,
      github: '',
    },
    {
      id: 5,
      title: 'titulo',
      description: 'descricao',
      link: 'www.alguma.coisa',
      img: Image,
      github: '',
    },
    {
      id: 6,
      title: 'titulo',
      description: 'descricao',
      link: 'www.alguma.coisa',
      img: Image,
      github: '',
    },
  ]);
  const [nightMode, setNightMode] = useState(false);
  const contextValue = useMemo(() => ({
    projects,
    setProjects,
    nightMode,
    setNightMode,
  }), [nightMode, setNightMode]);

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
