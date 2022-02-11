import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
     box-sizing: border-box;
  }

  body, .App, #root{
   margin: 0;
   padding: 0;
   width: 100%;
   height: 100%;
  }
`;