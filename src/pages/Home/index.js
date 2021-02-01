import {
  Container,
  Header,
  Content,
  ProfileContainer,
  FeedContainer,
  ActionsContainer,
  QuestionCard,
  Logo,
  InconSignOut,
} from "./styles";

import imgProfile from "../../assets/foto_perfil.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";



function Profile(params) {
  return (
    <>
      <section>
        <img src={imgProfile} alt="profileImage" />
        <Link to="">Editar Foto</Link>
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
      <Header>
        <Logo src={logo} />
        <InconSignOut></InconSignOut>
      </Header>
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
              <img
                src="https://blog-geek-midia.s3.amazonaws.com/wp-content/uploads/2020/11/27155450/aprender-react.png"
                alt="postImage"
              />
            </section>
            <footer>
              <h1>11 Respostas</h1>
              <section>
                <header>
                  <img src={imgProfile} alt="imageProfile" />
                  <strong>por Fulano</strong>
                </header>
                <p>Resposta para a pergunta</p>
              </section>
              <form>
                <textarea placeholder="Responda essa duvida"></textarea>
              </form>
            </footer>
          </QuestionCard>
          <QuestionCard>
            <header>
              <img src={imgProfile} alt="profileImage" />
              <strong>Por ciclano da Silva</strong>
              <p>em 12/12/2012 as 12:12</p>
            </header>
            <section>
              <strong>Titulo</strong>
              <p>Descrição</p>
              <img
                src="https://blog-geek-midia.s3.amazonaws.com/wp-content/uploads/2020/11/27155450/aprender-react.png"
                alt="postImage"
              />
            </section>
            <footer>
              <h1>11 Respostas</h1>
              <section>
                <header>
                  <img src={imgProfile} alt="imageProfile"/>
                  <strong>por Fulano</strong>
                </header>
                <p>Resposta para a pergunta</p>
              </section>
              <form>
                <textarea placeholder="Responda essa duvida"></textarea>
              </form>
            </footer>
          </QuestionCard>
          <QuestionCard>
            <header>
              <img src={imgProfile} alt="profileImage" />
              <strong>Por ciclano da Silva</strong>
              <p>em 12/12/2012 as 12:12</p>
            </header>
            <section>
              <strong>Titulo</strong>
              <p>Descrição</p>
              <img
                src="https://blog-geek-midia.s3.amazonaws.com/wp-content/uploads/2020/11/27155450/aprender-react.png"
                alt="postImage"
              />
            </section>
            <footer>
              <h1>11 Respostas</h1>
              <section>
                <header>
                  <img src={imgProfile} alt="profileImage"/>
                  <strong>por Fulano</strong>
                </header>
                <p>Resposta para a pergunta</p>
              </section>
              <form>
                <textarea placeholder="Responda essa duvida"></textarea>
              </form>
            </footer>
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
