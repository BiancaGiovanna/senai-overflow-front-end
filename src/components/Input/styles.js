import styled from "styled-components";

export const Container = styled.div `
    width:100%;
    position: relative;
    margin-top: 15px;
    > input{
        border: 0;
        padding-left:10px;
        border-radius: 3px;

        font-family:'Roboto', sans-serif;
    }
    > label{
        position: absolute;
        left: 10px;
        top: 0;
        display: flex;
        align-items: center;

        transition: .2s ease-in-out;

        color: var(--darkGray);
        cursor: text;

        pointer-events:none;

    }
    > input,
      label{
        width:100%;
        height: 30px;
        font-size:1rem;
    }
    > input:not(:placeholder-shown) + label, 
    > input:focus + label{
        font-size: .9rem;
        color: var(--light);
        top: -25px;
        left: 0;
    }
`;