import {} from "./styles";
import { Container } from "./styles";

import imgReload from "../../assets/reload.png"

function Loading() {
  return(
    <Container>
      <img src={imgReload} alt="loading"/>
      Carregando ...
    </Container>
  );
}

export default Loading;