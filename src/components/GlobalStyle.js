import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`


html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    Oxygen-Sans, 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'Fira Sans',
    'Droid Sans', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

h2 {
  text-align:center;
  font-weight: 900;
  font-size: 36px;
  color: #008080;
  margin: 12px 4px;
}
`;

/*
 * Стили компонента App
 */
// .App {
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 16px;
//   padding-bottom: 24px;
// }
