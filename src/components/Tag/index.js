import { Container } from "./styled";

function Tag({ info }) {
  return (
    <Container>
      {info}
      <span>&times;</span>
    </Container>
  );
}

export default Tag;
