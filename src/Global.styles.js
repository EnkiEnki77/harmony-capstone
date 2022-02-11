import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
     box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;

  }

  html,body, .App, #root{
   margin: 0;
   padding: 0;
   width: 100%;
  }
`;