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

const url = 'http://localhost/4nutri-api/';

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

  const createUser = async () => {
    try {
      const response = await axios.post(url, userData);
      console.log(response);
      if (response.data.status == 200) {
        toast.success('Usuário cadastrado com sucesso!');
        navigate('/login');
      } else {
        toast.error('Ocorreu um erro ao cadastrar usuário');
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao cadastrar usuário');
    }
  };

  const saveUser = (event) => {
    event.preventDefault();

    createUser();
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
            name="genero"
            id="masculino"
            value="Masculino"
          ></InputRadio>
          <InputRadio name="genero" id="feminino" value="Feminino"></InputRadio>
          <InputRadio name="genero" id="outro" value="Outro"></InputRadio>
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
