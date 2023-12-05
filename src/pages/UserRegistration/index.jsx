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
    if (!validate()) {
      return;
    }
    createNutritionist();
  };

  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );

  function validate() {
    if (!userData.name) {
      toast.error('Necessario preencher o campo nome!');
      return false;
    }
    if (!userData.email) {
      toast.error('Necessario preencher o campo email!');
      return false;
    }
    if (!validEmail.test(userData.email)) {
      toast.error('Email invalido!');
      return false;
    }
    if (!userData.crn) {
      toast.error('Necessario preencher o campo CRN!!');
      return false;
    }
    if (userData.crn.length != 7) {
      toast.error('CRN invalido!');
      return false;
    }
    if (!userData.cpf) {
      toast.error('Necessario preencher o campo CPF!');
      return false;
    }

    if (userData.cpf.length < 11 || userData.cpf.length > 11) {
      toast.error('CPF invalido!');
      return false;
    }
    if (!userData.phone) {
      toast.error('Necessario preencher o campo telefone!');
      return false;
    }
    if (!userData.mobile) {
      toast.error('Necessario preencher o campo celular!');
      return false;
    }
    if (userData.mobile.length < 11) {
      toast.error('Número invalido!');
      return false;
    }
    if (!userData.birth_date) {
      toast.error('Necessario preencher o campo data de nascimento!');
      return false;
    }
    if (!validateBirthDate(userData.birth_date)) {
      toast.error('Data invalida!');
      return false;
    }
    if (!userData.gender) {
      toast.error('Necessario selecionar o seu genero!');
      return false;
    }
    if (!userData.password) {
      toast.error('Necessario preencher o campo senha!');
      return false;
    }
    if (!validPassword.test(userData.password)) {
      toast.error(
        'A senha deve conter letras, número e ter no mínimo 6 caracteres!!'
      );
      return false;
    }
    if (!userData.confirm_password) {
      toast.error('Necessario preencher o campo confirmar senha!');
      return false;
    }
    if (userData.confirm_password !== userData.password) {
      toast.error('Senhas diferentes!');
      return false;
    }

    return true;
  }

  return (
    <PageBuilder pageName="Cadastro de Usuário">
      <Form>
        <SimpleTitle>Cadastre-se</SimpleTitle>
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
