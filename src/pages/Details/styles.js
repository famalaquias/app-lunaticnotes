import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid; // vai dizer aonde cada parte do layout vai se encaixar;
  grid-template-rows: 105px auto; // pois terá duas linhas, uma para o cabeçalho e outra para o conteúdo;
  grid-template-areas: // para nomear essas regiões;
  "header"
  "content";

  /* estilizando a parte que está dentro da main */
  > main {
    grid-area: content;
    overflow-y: scroll; // quando o conteúdo não caber mais na vertical, apareça uma barra para rolar;
    padding: 64px 0;
  }
`;

export const Links = styled.ul`
  list-style: none; // tira o estilo padrão da lista;
  
  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Content = styled.div`
  max-width: 550px; // máxima largura;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end; // botão vai para o canto direito;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`;
