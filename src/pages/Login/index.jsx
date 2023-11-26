import PageBuilder from '../../components/PageBuilder';
import Form from '../../components/Form';
import Input from '../../components/Input';
import SimpleText from '../../components/SimpleText';
import SimpleTitle from '../../components/SimpleTitle';
import Button from '../../components/Button';
import { useContext, useEffect, useState } from 'react';
import handleInputChange from '../../handlers/input.handler';
import { Context } from '../../Context/AuthProvider';

export default function Login() {
  const { handleLogin } = useContext(Context);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const sendLogin = (event) => {
    event.preventDefault();
    handleLogin(loginData);
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (user || token) {
      localStorage.clear();
    }
  });
  return (
    <PageBuilder pageName="Login">
      <Form>
        <SimpleTitle>Entrar</SimpleTitle>
        <br />
        <SimpleText>Email</SimpleText>
        <Input
          type="email"
          name="email"
          value={loginData.email}
          onChange={(event) => handleInputChange(event, setLoginData)}
        ></Input>

        <SimpleText>Senha</SimpleText>
        <Input
          type="password"
          name="password"
          value={loginData.password}
          onChange={(event) => handleInputChange(event, setLoginData)}
        ></Input>

        <Button width="300px" onClick={sendLogin}>
          Entrar
        </Button>
      </Form>
    </PageBuilder>
  );
}
