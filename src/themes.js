import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f0ead6",
  fontColor: "#2f2f2f",
};

export const darkTheme = {
  body: "#2f2f2f",
  fontColor: "#f0ead6",
};

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.body};
        transition: background-color 0.25s linear;
        
    }
    *{
        color: ${(props) => props.theme.fontColor};
        transition: color 0.5s linear;

    }

    .nav-menu{
      background-color: ${(props) => props.theme.fontColor};
    }

    .navbar-text{
      color: ${(props) => props.theme.body}
    }

    

`;
