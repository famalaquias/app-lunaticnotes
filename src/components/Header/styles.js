import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header; // cabeçalho fixo;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px; // borda abaixo do cabeçalho;
  border-bottom-style: solid; // estilo da borda abaixo do cabeçalho;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; // cor da borda abaixo do cabeçalho;

  display: flex;
  justify-content: space-between; // cada elemento em uma extremidade;

  padding: 0 80px; // 0 em cima e em baixo; 80 dos lados;
`;

export const Profile = styled(Link)`
  display: flex; // alinhamento de imagem;
  align-items: center; // alinhamento de texto;

  /* estilizando a imagem dentro do Profile */
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%; // faz a imagem ficar redonda;
  }

  /* estilizando os textos dentro do Profile */
  > div {
    display: flex;
    flex-direction: column; // um embaixo do outro;
    margin-left: 16px; // lado esquerdo;
    line-height: 24px; // afasta uma linha da outra;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none; // tira as bordas do botão;
  background: none; // tira o background;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
`;
