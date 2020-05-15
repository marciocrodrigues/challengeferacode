import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    /** o tamanho levará em conta a borda */
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  /** ocupar 100% da pagina */
  html, body, #root {
    height: 100%;
  }

  body {
    /** Deixa a fonte mais definida */
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
