import { Container } from "./styles";

import imgLogo from "../../assets/reload.png";

function Loading() {
  return (
    <Container>
      <img src={imgLogo} alt="reload"/>
      Carregando...
    </Container>
  );
}

export default Loading;
