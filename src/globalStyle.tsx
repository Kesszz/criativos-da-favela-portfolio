import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "League Gothic", serif;

        ::-webkit-scrollbar {
  height: 7px;
  width: 7px;
  cursor: default;
 
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background: #007e7ad6;
  cursor: default;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--green);
}
        
    }

    body {
        overflow-x: hidden;
    }
`;