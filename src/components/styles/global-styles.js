import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body {
    margin: 0;
    padding:0;
    font-family: 'irsans';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #0f1724;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

`;
