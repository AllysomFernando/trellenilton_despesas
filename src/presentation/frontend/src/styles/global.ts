import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
    html {
    font-family: ${theme.main.font.family.primary};
    font-weight: ${theme.main.font.weight.base};
    font-size: ${theme.main.font.size.base};
    line-height: 1.6;
    color: ${theme.main.colors.textColor};
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.main.colors.backgroundColor};
    overflow-y: hidden;
  }
  h1, h2, h3 {
    line-height: 1.2;
    color: ${theme.main.colors.textColor};
    font-weight: ${theme.main.font.weight.bold};
    letter-spacing: -0.04em;
    }
    h1 {
        font-size: ${theme.main.font.size.xxl};
    }
    h2{
        font-size: ${theme.main.font.size.xl};
    }
    h3{
        font-size: ${theme.main.font.size.lg};
    }
    a {
        text-decoration: none;
        color: ${theme.main.colors.secondary};
        font-weight: ${theme.main.font.weight.bold};
        font-size: ${theme.main.font.size.sm};
    }
    a:houver {
        color: ${theme.main.colors.primary};
    }
    ul {
        list-style: none;
    }
    input{
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
`;
