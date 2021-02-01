import { api } from "../../services/api";
import { Container, FormLogin, Header, Body, Button } from "./styles";
import Input from "../../components/Input";
import { Link, useHistory } from "react-router-dom";

import { useState } from "react";

function Register() {
  const history = useHistory();
  const [register, setRegister] = useState({
    ra:"",
    name:"",
    email: "",
    password: "",
    confirmPassword:"",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/students", register);

      console.log(response.data);

      history.push("/");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };
  const handleInput = (e) => {
    setRegister({ ...setRegister, [e.target.id]: e.target.value });
  };
  return (
    <Container>
      <FormLogin onSubmit={handleSubmit}>
        <Header>
          <h1>BEM-VINDO AO SENAI OVERFLOW</h1>
          <h2>INFORME OS SEUS DADOS</h2>
        </Header>
        <Body>
          <Input id="ra" label="RA" type="text" handler={handleInput} />
          <Input id="name" label="Nome" type="text" handler={handleInput} />
          <Input id="email" label="E-mail" type="email" handler={handleInput} />
          <Input
            id="password"
            label="Senha"
            type="password"
            handler={handleInput}
          />
          <Input
            id="valid-password"
            label="Confirmar a Senha"
            type="password"
            handler={handleInput}
          />

          <Button>Entrar</Button>
          <Link to="/">Ou clique aqui para se Logar</Link>
        </Body>
      </FormLogin>
    </Container>
  );
}
export default Register;
