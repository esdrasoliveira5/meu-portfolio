import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import PortfolioContext from './AppContext';
import ToDo1 from '../img/ToDo1.png';
import BlogsApi from '../img/BlogsApi.png';
import SmithShop from '../img/SmithShop.JPG';
import GameLibrary from '../img/GameDescription.jpg';
import buy from '../img/buy.png';
import carshop from '../img/carshop.jpg';
import cyberWallet from '../img/cyberwallet.jpeg';
import droneFeeder from '../img/droneFeeder.png';

function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Game library',
      description: 'Neste projeto foi desenvolvido uma aplicação completa com frontend em javascript e React.js, um backend em typescript e node.js e um banco de dados PostgreSQL.Essa aplicação serve para salvar e separar games em uma coleção.',
      link: 'https://gameslibrary5713.vercel.app/',
      img: GameLibrary,
      github: 'https://github.com/esdrasoliveira5/game-library',
    },
    {
      id: 2,
      title: 'Buy from me',
      description: `Neste projeto foi desenvolvido uma aplicação completa com frontend em javascript e React.js, 
      um backend em typescript e node.js e um banco de dados PostgreSQL. Essa aplicação simula um site de anúncios de produtos novos e usados.`,
      link: 'https://buy-from-me.vercel.app/',
      img: buy,
      github: 'https://github.com/esdrasoliveira5/buy-from-me',
    },
    {
      id: 3,
      title: 'To-Do list',
      description: `Neste projeto foi desenvolvido uma aplicação completa com frontend em javascript e React.js, 
      um backend em node.js e um banco de dados PostgreSQL. Essa aplicação permite salvar e excluir tarefas em um banco de dados.`,
      link: undefined,
      img: ToDo1,
      github: 'https://github.com/esdrasoliveira5/to-do-list',
    },
    {
      id: 4,
      title: 'Car Shop',
      description: `Neste projeto foi desenvolvido uma CRUD api para
       gerenciar uma concessionária de veículos utilizando o banco de dados MongoDB aplicando conceitos de POO.`,
      link: undefined,
      img: carshop,
      github: 'https://github.com/esdrasoliveira5/Car-Shop',
    },
    {
      id: 5,
      title: 'Blogs Api',
      description: 'API CRUD usando ORM com o pacote sequelize do npm  feita com node.js. Esse API e capaz de criar usuários, BlogPosts e categorias.',
      link: undefined,
      img: BlogsApi,
      github: 'https://github.com/esdrasoliveira5/Blogs-api',
    },
    {
      id: 6,
      title: 'Smith Shop',
      description: 'Este projeto foi desenvolvido uma CRUD (Create, Read, Update e Delete) de itens medievais, no formato de uma API, utilizando Typescript.',
      link: undefined,
      img: SmithShop,
      github: 'https://github.com/esdrasoliveira5/Smith-Shop-API',
    },
    {
      id: 7,
      title: 'Cyber Wallet',
      description: 'CRUD api para gerenciar uma carteira digital utilizando o banco de dados MongoDB aplicando conceitos de POO e SOLID.',
      link: undefined,
      img: cyberWallet,
      github: 'https://github.com/esdrasoliveira5/cyber-wallet',
    },
    {
      id: 8,
      title: 'Drone Feeder',
      description: 'API Criada durante o curso de Aceleração em Java oferecido pela Trybe. O Objetivo desse projeto era criar uma API REST de entregas feitas por Drones.',
      link: 'https://drone-feede-app.vercel.app/',
      img: droneFeeder,
      github: 'https://github.com/esdrasoliveira5/DroneFeeder',
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
