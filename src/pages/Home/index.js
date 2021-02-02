import { useEffect, useState } from "react";
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
import { Link, useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { singOut } from "../../services/security";

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

function Question({ question }) {
  return (
    <QuestionCard>
      <header>
        <img src={imgProfile} alt="profileImage" />
        <strong>Por {question.Student.name}</strong>
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
  );
}
function Home() {
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const loadQuestions = async () => {
      const response = await api.get("/feed");

      setQuestions(response.data);
    };
    loadQuestions();
  }, []);
  const handleSingOut = () => {
    singOut();

    history.replace();
  };
  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <InconSignOut onClick={handleSingOut} />
      </Header>
      <Content>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <FeedContainer>
          {questions.map((q) => (
            <Question question={q} />
          ))}

        </FeedContainer>
        <ActionsContainer>
          <button>Fazer uma pergunta</button>
        </ActionsContainer>
      </Content>
    </Container>
  );
}

export default Home;
