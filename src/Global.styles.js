import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
     box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
    caret-color: transparent;
  }

  html,body, .App, #root{
   margin: 0;
   padding: 0;
   width: 100%;
  }

  a{
    text-decoration: none;
  }
`;