import React from 'react';
import styled from 'styled-components';
import SequelizeLogo from '../img/logo-small.png';

const SkillsStyle = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 10%;
  width: 80%;
  h1 {
    text-align: center;
    animation:  mymy 3s ;
  }
  p {
    text-align: center;
  }

  @keyframes mymy {
    from{ transform: translate(0px, 150px);}
    to {transform: translate(0px, 0px);}
  }
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

const SkillsBoxStyled = styled.div`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  div:hover {
    transform: scale(1.5);
    transition: all .5s ease-in-out;
  }
`;

const SkillStyled = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
  }


`;

function Skills() {
  return (
    <SkillsStyle>
      <HiddenBox>
        <h1>Skills</h1>
      </HiddenBox>
      <SkillsBoxStyled>
        <SkillStyled>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
            />
          </a>
          <h3>JavaScript</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
            />
          </a>
          <h3>TypeScript</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://www.python.org"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
            />
          </a>
          <h3>Python</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://www.w3.org/html/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
            />
          </a>
          <h3>HTML 5</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
            />
          </a>
          <h3>Css</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://getbootstrap.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
            />
          </a>
          <h3>Bootstrap</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
            />
          </a>
          <h3>ReactJs</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://redux.js.org"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="redux"
            />
          </a>
          <h3>Redux</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
            />
          </a>
          <h3>Node Js</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://expressjs.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
            />
          </a>
          <h3>Express</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://www.nginx.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"
              alt="nginx"
            />
          </a>
          <h3>Nginx</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://sequelize.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={SequelizeLogo}
              alt="sequelize"
            />
          </a>
          <h3>Sequelize</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
            />
          </a>
          <h3>MongoDb</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://www.mysql.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
            />
          </a>
          <h3>Mysql</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://www.postgresql.org"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
            />
          </a>
          <h3>Postgresql</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://www.gnu.org/software/bash/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
              alt="bash"
            />
          </a>
          <h3>Bash</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://www.docker.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
              alt="docker"
            />
          </a>
          <h3>Docker</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://heroku.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
              alt="heroku"
            />
          </a>
          <h3>Heroku</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://postman.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
            />
          </a>
          <h3>Postman</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://mochajs.org"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg"
              alt="mocha"
            />
          </a>
          <h3>Mocha</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://jestjs.io"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
              alt="jest"
            />
          </a>
          <h3>Jest</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://www.linux.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
              alt="linux"
            />
          </a>
          <h3>Linux</h3>
        </SkillStyled>
        <SkillStyled>
          <a
            href="https://git-scm.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
            />
          </a>
          <h3>Git</h3>
        </SkillStyled>
      </SkillsBoxStyled>
    </SkillsStyle>
  );
}

export default Skills;
