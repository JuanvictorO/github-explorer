import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './style';

const Dashborad: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/28358198?s=460&u=73f41cf3b51573580de26daae5dcda82d17b25e2&v=4"
            alt="Juan Victor Oliveira"
          />
          <div>
            <strong>JuanvictorO/summernote</strong>
            <p>
              About Um repositório que implementa o summernote com o banco de
              dados (incluindo adição de imagens e vídeos) com o Codeigniter 3
              e, futuramente, 4
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/28358198?s=460&u=73f41cf3b51573580de26daae5dcda82d17b25e2&v=4"
            alt="Juan Victor Oliveira"
          />
          <div>
            <strong>JuanvictorO/summernote</strong>
            <p>
              About Um repositório que implementa o summernote com o banco de
              dados (incluindo adição de imagens e vídeos) com o Codeigniter 3
              e, futuramente, 4
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/28358198?s=460&u=73f41cf3b51573580de26daae5dcda82d17b25e2&v=4"
            alt="Juan Victor Oliveira"
          />
          <div>
            <strong>JuanvictorO/summernote</strong>
            <p>
              About Um repositório que implementa o summernote com o banco de
              dados (incluindo adição de imagens e vídeos) com o Codeigniter 3
              e, futuramente, 4
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/28358198?s=460&u=73f41cf3b51573580de26daae5dcda82d17b25e2&v=4"
            alt="Juan Victor Oliveira"
          />
          <div>
            <strong>JuanvictorO/summernote</strong>
            <p>
              About Um repositório que implementa o summernote com o banco de
              dados (incluindo adição de imagens e vídeos) com o Codeigniter 3
              e, futuramente, 4
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashborad;
