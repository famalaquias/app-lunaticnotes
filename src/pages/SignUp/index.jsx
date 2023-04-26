/* 
  SignUp: página cadastro de usuário - criar conta;
*/
import { useState } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Form, Image } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
  const navigate = useNavigate();

  /* 
  useState: é um hook que cria um estado:
  name: valor atual do estado - é o estado;
  setName: função que atualiza o estado name;
  */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* Cadastrando usuários: */
  function handleSignUp() {
    /* garantir se nome, email e senha foram preenchidos pelo usuário */
    if (name === "" || email === "" || password === "") {
      alert("Preencha todos os campos");
      return;
    }

    /* mandando as informações para o backend */
    api
      .post("/users", {
        name,
        email,
        password,
      })
      /* then: é executado se tudo der certo */
      .then((res) => {
        if (res.status === 201) {
          alert("Usuário cadastrado com sucesso!");
          navigate("/");
        }
      })
      /* catch: é executado se algo der errado */
      .catch((error) => {
        if (error.res.data.message) {
          alert(error.res.data.message);
        } else {
          alert("Erro ao cadastrar usuário");
        }
      })
  }

  return (
    <Container>
      <Image />

      <Form>
        <h1>Lunatic Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          /* 
          onChange: toda vez que o valor do input muda, ela dispara um evento;
          o evento é capturado e transferido pro setName para ser atuzalido;
          */
          onChange={(e) => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}          
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/">Voltar para o login</Link>
      </Form> 
    </Container> 
  );
}
