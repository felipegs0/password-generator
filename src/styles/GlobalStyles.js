import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        
    }

    body {
        font-family: "Roboto Mono", Avenir, Helvetica, Arial, sans-serif; 
        background-color: #0f172a;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    html, body {
        height: 100%;
        width: 100vw;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
