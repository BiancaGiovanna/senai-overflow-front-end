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
    validPassword:"",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if(register.password !== register.validPassword)
        return alert("As senhas não são iguais"); 

        
      const response = await api.post("/students", {
        ra: register.ra,
        name: register.name,
        email: register.email,
        password: register.password,
      });

      console.log(response.data);

      history.push("/home");
       
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };
  const handleInput = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
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
            id="validP  assword"
            label="Confirmar a Senha"
            type="password"
            handler={handleInput}
          />
          <Button>Registrar</Button>
          <Link to="/">Ou clique aqui para se Logar</Link>
        </Body>
      </FormLogin>
    </Container>
  );
}
export default Register;
