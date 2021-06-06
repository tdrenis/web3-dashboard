import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }
    body{
        font-family: 'Inter', sans-serif;
        width: 100%;
        background-color: whitesmoke;
    }
    h2{
        font-size: 3rem;
        font-weight: lighter;
        color: rgb(39, 41, 45);
    }
    h3{
        font-size: 1.3rem;
        color: rgb(39, 41, 45);
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: rgb(39, 41, 45);
    }
    a{
        text-decoration: none !important;
        color: rgb(39, 41, 45);
    }
    a:hover { 
        color: rgb(88, 91, 104);
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
        font-family: "Inter", sans-serif;
    }
`;

export default GlobalStyles;