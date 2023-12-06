import PageBuilder from '../../components/PageBuilder';
import Form from '../../components/Form';
import Input from '../../components/Input';
import SimpleText from '../../components/SimpleText';
import SimpleTitle from '../../components/SimpleTitle';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { useContext, useEffect, useState } from 'react';
import handleInputChange from '../../handlers/input.handler';
import { Context } from '../../Context/AuthProvider';
import imgLogin from '../../assets/images/login.png';
import './login.css';
import { toast } from 'react-toastify';

export default function Login() {
  const { handleLogin } = useContext(Context);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const sendLogin = (event) => {
    event.preventDefault();
    if (!loginData.email) return toast.error('Preencha o seu e-mail!');
    if (!loginData.password) return toast.error('Preencha a sua senha!');
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
      <Container>
        <div className="banner-login">
          <img src={imgLogin} className="img-login" />
        </div>
        <Form width="fit-content" heigth="400px">
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
      </Container>
    </PageBuilder>
  );
}
