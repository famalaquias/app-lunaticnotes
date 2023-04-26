/* 
  pasta de estilo global, todos os arquivos possuem essa estilização;
*/

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    /* deixa as fontes mais suaves */ 
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  /* a: link - remova o inderline que aparece em todo link */
  a {
    text-decoration: none; 
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    /* dá uma escurecida no botão */
    filter: brightness(0.9); 
  }
`;
