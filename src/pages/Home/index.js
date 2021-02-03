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
import { singOut, getUser } from "../../services/security";

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
function Answer({ answer }) {
  return (
    <section>
      <header>
        <img src={imgProfile} alt="imageProfile" />
        <strong>por {answer.Student.name}</strong>
      </header>
      <p>{answer.description}</p>
    </section>
  );
}
function Question({ question }) {
  const [showAnswers, setShowAnswers] = useState(false);

  const [newAnswer, setNewAnswer] = useState(" ");

  const [answers, setAnswer] = useState(question.Answers);

  const qtdAnswers = question.Answers.length;

  const handleAddAnswer = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/questions/${question.id}/answers`, {
        description: newAnswer,
      });
      const aluno = getUser();
      const answerAdded = {
        id: response.data.id,
        description: newAnswer,
        created_at: response.data.createdAt,
        Student:{
          id: aluno.studentId,
          name:aluno.name,
        }
      } 

      setAnswer([...answers, answerAdded]);

      setNewAnswer(" ");

    } catch (error) {
      alert(error);
    }
  };

  return (
    <QuestionCard>
      <header>
        <img src={imgProfile} alt="profileImage" />
        <strong>Por {question.Student.name}</strong>
        <p>em {question.created_at}</p>
      </header>
      <section>
        <strong>{question.title}</strong>
        <p>{question.description}</p>
        <img src={question.image} alt="postImage" />
      </section>
      <footer>
        <h1 onClick={() => setShowAnswers(!showAnswers)}>
          {qtdAnswers === 0 ? (
            "Seja o primeiro a responder"
          ) : (
            <>
              {qtdAnswers} {qtdAnswers > 1 ? "Respostas" : "Resposta"}
            </>
          )}
        </h1>
        {showAnswers && (
          <>
            {answers.map((a) => (
              <Answer answer={a} />
            ))}
          </>
        )}

        <form onSubmit={handleAddAnswer}>
          <textarea
            placeholder="Responda essa duvida"
            onChange={(e) => setNewAnswer(e.target.value)}
            required
          ></textarea>
          <button>Enviar</button>
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
