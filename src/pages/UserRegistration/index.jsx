import PageBuilder from '../../components/PageBuilder';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputRadio from '../../components/InputRadio';
import Button from '../../components/Button';
import Label from '../../components/Label';
import SimpleTitle from '../../components/SimpleTitle';
import './UserRegistration.css';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import handleInputChange from '../../handlers/input.handler';
import { differenceInYears, parseISO } from 'date-fns';

export default function UserRegistration() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    crn: '',
    cpf: '',
    email: '',
    phone: '',
    mobile: '',
    birth_date: '',
    gender: '',
    password: '',
    confirm_password: '',
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: '',
  });

  const validateBirthDate = (birthDate) => {
    const currentDate = new Date();
    const parsedBirthDate = parseISO(birthDate);
    const age = differenceInYears(currentDate, parsedBirthDate);
    if (age < 18) {
      return false;
    }
    return true;
  };

  const createNutritionist = async () => {
    await axios
      .post('nutritionist', userData)
      .then((response) => {
        if (response.status == 201) {
          toast.success('Cadastro realizado com sucesso!');
          setTimeout(5001);
          setUserData('');
          navigate('/login');
        } else {
          toast.error('Ocorreu um erro no cadastro!');
          console.error(response);
        }
      })
      .catch((error) => {
        toast.error('Ocorreu um erro no cadastro!');
        console.error(error);
      });
  };

  const saveUser = (event) => {
    event.preventDefault();
    if (!validate()) return;
    createNutritionist();
  };

  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );

  function validate() {
    if (!userData.name)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo nome!',
      });
    if (!userData.email)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo email!',
      });
    if (!validEmail.test(userData.email)) {
      return setStatus({
        type: 'error',
        mensagem: 'Email invalido',
      });
    }
    if (!userData.crn)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo CRN!',
      });
    if (userData.crn.length < 11 || userData.crn.length > 11)
      return setStatus({
        type: 'error',
        mensagem: 'CRN invalido!',
      });
    if (!userData.cpf)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo CPF!',
      });
    if (userData.cpf.length < 11 || userData.cpf.length > 11)
      return setStatus({
        type: 'error',
        mensagem: 'CPF invalido!',
      });
    if (!userData.phone)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo telefone!',
      });
    if (!userData.mobile)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo celular!',
      });
    if (userData.mobile.length < 11 || userData.mobile.length > 11)
      return setStatus({
        type: 'error',
        mensagem: 'Número invalido!',
      });
    if (!userData.birth_date)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo data de nascimento!',
      });
    if (!validateBirthDate(userData.birth_date)) {
      return setStatus({
        type: 'error',
        mensagem: 'Data invalida!',
      });
    }
    if (!userData.gender)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario selecionar o seu genero!',
      });
    if (!userData.password)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo senha!',
      });
    if (!validPassword.test(userData.password)) {
      return setStatus({
        type: 'error',
        mensagem:
          'A senha deve conter letras, número e ter no mínimo 6 caracteres!',
      });
    }
    if (!userData.confirm_password)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo confirmar senha!',
      });
    if (userData.confirm_password !== userData.password)
      return setStatus({
        type: 'error',
        mensagem: 'Senhas diferentes!',
      });

    return true;
  }

  return (
    <PageBuilder pageName="Cadastro de Usuário" userName="João Pablo">
      <Form>
        <SimpleTitle>Cadastre-se</SimpleTitle>
        {status.type === 'success' ? (
          <p style={{ color: 'green', fontSize: '20px', margin: '10px' }}>
            {status.mensagem}
          </p>
        ) : (
          ''
        )}
        {status.type === 'error' ? (
          <p style={{ color: '#ff0000', fontSize: '20px', margin: '10px' }}>
            {status.mensagem}
          </p>
        ) : (
          ''
        )}

        <Label>Nome</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={userData.name}
          onChange={(event) => handleInputChange(event, setUserData)}
        ></Input>

        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          onChange={(event) => handleInputChange(event, setUserData)}
        ></Input>

        <Label>CRN</Label>
        <Input
          type="text"
          name="crn"
          id="crn"
          value={userData.crn}
          onChange={(event) => handleInputChange(event, setUserData)}
        ></Input>

        <Label>CPF</Label>
        <Input
          type="text"
          name="cpf"
          id="cpf"
          value={userData.cpf}
          onChange={(event) => handleInputChange(event, setUserData)}
        ></Input>

        <Label>Telefone</Label>
        <Input
          type="text"
          name="phone"
          id="phone"
          value={userData.phone}
          onChange={(event) => handleInputChange(event, setUserData)}
        ></Input>

        <Label>Celular</Label>
        <Input
          type="text"
          name="mobile"
          id="mobile"
          value={userData.mobile}
          onChange={(event) => handleInputChange(event, setUserData)}
        ></Input>

        <Label>Data de nascimento</Label>
        <Input
          type="date"
          name="birth_date"
          id="birth_date"
          value={userData.birth_date}
          onChange={(event) => handleInputChange(event, setUserData)}
        ></Input>

        <Label>Gênero</Label>
        <fieldset className="fildset">
          <InputRadio
            name="gender"
            id="masculino"
            value="Masculino"
            onChange={(event) => {
              console.log(event.target.value);
              handleInputChange(event, setUserData);
            }}
          ></InputRadio>
          <InputRadio
            name="gender"
            id="feminino"
            value="Feminino"
            onChange={(event) => {
              console.log(event.target.value);
              handleInputChange(event, setUserData);
            }}
          ></InputRadio>
          <InputRadio
            name="gender"
            id="outro"
            value="Outro"
            onChange={(event) => {
              console.log(event.target.value);
              handleInputChange(event, setUserData);
            }}
          ></InputRadio>
        </fieldset>

        <Label>Senha</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={userData.password}
          onChange={(event) => handleInputChange(event, setUserData)}
        ></Input>

        <Label>Confirme sua senha</Label>
        <Input
          type="password"
          name="confirm_password"
          id="confirm_password"
          value={userData.confirm_password}
          onChange={(event) => handleInputChange(event, setUserData)}
        ></Input>

        <Button width="300px" onClick={saveUser}>
          Cadastrar
        </Button>
      </Form>
    </PageBuilder>
  );
}
