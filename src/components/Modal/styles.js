import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9;

  background-color: #333c;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.section`
    min-width: 250px;
    min-height: 250px;
    max-height:cal(100vh - 20px );
    padding: 20px;

    z-index: 19;
    overflow-y:auto;


    background-color:var(--dark);
    box-shadow: 0px 0px 10px black;
    border-radius:4px;
    position:relative;

    > span{
        position:absolute;
        top:15px;
        right: 20px;

        font-size: 1.8rem;

        cursor: pointer;
        transition: .2s;

        :hover{
            color:var(--primary)
        }
    }
    
    > header{
        font-weight:700;
        font-size: 1.5rem;
        text-align: center;
        margin: 0px 20px;
    }
`;

