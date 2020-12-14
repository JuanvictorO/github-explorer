import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/github-logo.svg';

import { Header, RepositoryInfo, Issues } from './style';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?v=4"
            alt="Rocekat seat"
          />
          <div>
            <strong>rockeatseat/unform</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <strong>Stars</strong>
          </li>
          <li>
            <strong>1808</strong>
            <strong>Forks</strong>
          </li>
          <li>
            <strong>1808</strong>
            <strong>Issues abertas</strong>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="sdf">
          <div>
            <strong>a</strong>
            <p>a</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
