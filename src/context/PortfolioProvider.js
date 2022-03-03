import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import PortfolioContext from './AppContext';
import ToDo1 from '../img/ToDo1.png';
import ToDoB from '../img/TodoBack.png';
import BlogsApi from '../img/BlogsApi.png';
import SmithShop from '../img/SmithShop.JPG';
import GameLibrary from '../img/Screenshot from 2022-03-03 17-00-06.png';
import Game2 from '../img/Screenshot from 2022-03-03 18-09-06.png';

function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Game library',
      description: 'Aplicação web feita React.js de um catálogo de games a onde o usuário pode criar uma conta e salvar games na sua coleção e separa-los por categoria.',
      link: 'https://gameslibrary5713.vercel.app/home',
      img: GameLibrary,
      github: 'https://github.com/esdrasoliveira5/Games-library-frontend',
    },
    {
      id: 2,
      title: 'Game library back-end',
      description: ' Este projeto, foi desenvolvido uma CRUD que gerencia dados de umusuario em um site de catalogo dee games, no formato de uma API RESTful, utilizando Typescript.',
      link: 'https://gamelibrary5713.herokuapp.com/',
      img: Game2,
      github: 'https://github.com/esdrasoliveira5/game-library-backend',
    },
    {
      id: 3,
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
      id: 4,
      title: 'To-do List Back-end',
      description: `Uma api RESTful feita com node.js que se comunica 
      com um banco de dados PostgreSql através do Sequelize ORM e faz 
      validações de permissão de usuário por token com o JWT.`,
      link: 'https://to-do-list-back-end-3456.herokuapp.com/',
      img: ToDoB,
      github: 'https://github.com/esdrasoliveira5/to-do-list-backend',
    },
    {
      id: 5,
      title: 'Blogs Api',
      description: `API CRUD usando ORM com o pacote sequelize do npm  feita com node.js.
      Esse API e capaz de criar usuarios, BlogPosts e categorias.`,
      link: '',
      img: BlogsApi,
      github: 'https://github.com/esdrasoliveira5/Blogs-api',
    },
    {
      id: 6,
      title: 'Smith Shop',
      description: 'Este projeto foi desenvolvido uma CRUD (Create, Read, Update e Delete) de itens medievais, no formato de uma API, utilizando Typescript.',
      link: '',
      img: SmithShop,
      github: 'https://github.com/esdrasoliveira5/Smith-Shop-API',
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
