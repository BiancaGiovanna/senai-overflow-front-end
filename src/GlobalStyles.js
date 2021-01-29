import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

    :root {
        --dark      : #282a36;
        --darkGray  : #44475a;
        --light     : #EDF2F4;
        --primary   : #EF233C;
        --secondary : #D90425;
    }
    *{
        margin : 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Roboto', sans-serif;
        color: var(--light);
    }
    button{
        padding:10px;
        font-weight: 700;

        color: var(--light);
        background-color: var(--darkGray);
        border:1px solid var(--light);
        border-radius: 4px;
        cursor:pointer;

        transition: .2s ease-in-out;
        :hover{
            background-color: var(--primary);
        }
        :active{
            transform: scale(0.85);
        }
        :disabled{
            background-color: transparent;
            border: 1px solid var(--darkGray);
            color: var(--darkGray);
        }
    }
    a{
        color: var(--light);
        transition:.2s;
        text-align:center;

        :hover{
            color: var(--primary);
        }
        :active{
            transform: scale(0.90);
        }
    }

`;
