import {
  Container,
  Header,
  Content,
  ProfileContainer,
  FeedContainer,
  ActionsContainer,
  QuestionCard,
} from "./styles";

import imgProfile from "../../assets/foto_perfil.png";

function Profile(params) {
  return (
    <>
      <section>
        <img src={imgProfile} alt="profileImage" />
        <a href="#">Editar Foto</a>
      </section>
      <section>
        <strong>Nome:</strong>
        <p>Bianca Giovanna</p>
      </section>
      <section>
        <strong>RA:</strong>
        <p>1234567</p>
      </section>
      <section>
        <strong>Nome:</strong>
        <p>bianca@gmail.com</p>
      </section>
    </>
  );
}

function Home() {
  return (
    <Container>
      <Header></Header>
      <Content>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <FeedContainer>
          <QuestionCard>
            <header>
              <img src={imgProfile} alt="profileImage" />
              <strong>Por ciclano da Silva</strong>
              <p>em 12/12/2012 as 12:12</p>
            </header>
            <section>
              <strong>Titulo</strong>
              <p>Descrição</p>
              <img src="https://blog-geek-midia.s3.amazonaws.com/wp-content/uploads/2020/11/27155450/aprender-react.png"/>
            </section>
            <footer></footer>
          </QuestionCard>
        </FeedContainer>
        <ActionsContainer>
          <button>Fazer uma pergunta</button>
        </ActionsContainer>
      </Content>
    </Container>
  );
}

export default Home;
