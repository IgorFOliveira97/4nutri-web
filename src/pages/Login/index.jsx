import PageBuilder from '../../components/PageBuilder';
import Form from '../../components/Form';
import Input from '../../components/Input';
import SimpleText from '../../components/SimpleText';
import SimpleTitle from '../../components/SimpleTitle';
import Button from '../../components/Button';
import { useState } from 'react';
import handleInputChange from '../../handlers/input.handler';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const sendLoginData = async (event) => {
    event.preventDefault();
    await axios
      .post('login', userData)
      .then((response) => {
        if (response.status == 201) {
          toast.success('Login realizado com sucesso!');
        } else if (response.status == 401) {
          toast.error('E-mail ou senha inválidos!');
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          toast.error('E-mail ou senha inválidos!');
        } else {
          toast.error('Ocorreu um erro no login!');
          console.log(error);
        }
      });
  };

  return (
    <PageBuilder pageName="Login" userName="João Pablo">
      <Form>
        <SimpleTitle>Entrar</SimpleTitle>
        <br />
        <SimpleText>Email</SimpleText>
        <Input
          type="email"
          name="email"
          value={userData.email}
          onChange={(event) => handleInputChange(event, setUserData)}
        ></Input>

        <SimpleText>Senha</SimpleText>
        <Input
          type="password"
          name="password"
          value={userData.password}
          onChange={(event) => handleInputChange(event, setUserData)}
        ></Input>

        <Button width="300px" onClick={(event) => sendLoginData(event)}>
          Entrar
        </Button>
      </Form>
    </PageBuilder>
  );
}
