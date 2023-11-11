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
  });

  const createNutritionist = async () => {
    await axios
      .post('nutricionista', userData)
      .then((response) => {
        if (response.status == 201) {
          toast.success('Usuário cadastrado com sucesso!');
          navigate('/login');
        } else {
          toast.error('Ocorreu um erro ao cadastrar usuário');
          console.error(response);
        }
      })
      .catch((error) => {
        toast.error('Ocorreu um erro ao cadastrar usuário');
        console.error(error);
      });
  };

  const saveUser = (event) => {
    event.preventDefault();

    createNutritionist();
  };

  return (
    <PageBuilder pageName="Cadastro de Usuário" userName="João Pablo">
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
          // onChange={(event) => handleInputChange(event, setUserData)}
        ></Input>

        <Button width="300px" onClick={saveUser}>
          Cadastrar
        </Button>
      </Form>
    </PageBuilder>
  );
}
