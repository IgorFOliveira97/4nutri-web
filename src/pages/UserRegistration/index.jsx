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

const url = 'http://localhost:8080/4nutri-api/';

export default function UserRegistration() {
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
      } else {
        toast.error('Ocorreu um erro ao cadastrar usuário');
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao cadastrar usuário');
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
          onChange={handleInputChange}
        ></Input>

        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          onChange={handleInputChange}
        ></Input>

        <Label>CRN</Label>
        <Input
          type="text"
          name="crn"
          id="crn"
          value={userData.crn}
          onChange={handleInputChange}
        ></Input>

        <Label>CPF</Label>
        <Input
          type="text"
          name="cpf"
          id="cpf"
          value={userData.cpf}
          onChange={handleInputChange}
        ></Input>

        <Label>Telefone</Label>
        <Input
          type="text"
          name="phone"
          id="phone"
          value={userData.phone}
          onChange={handleInputChange}
        ></Input>

        <Label>Celular</Label>
        <Input
          type="text"
          name="mobile"
          id="mobile"
          value={userData.mobile}
          onChange={handleInputChange}
        ></Input>

        <Label>Data de nascimento</Label>
        <Input
          type="date"
          name="birth_date"
          id="birth_date"
          value={userData.birth_date}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        ></Input>

        <Label>Confirme sua senha</Label>
        <Input
          type="password"
          name="confirm_password"
          id="confirm_password"
          value={userData.confirm_password}
          onChange={handleInputChange}
        ></Input>

        <Button width="300px" onClick={saveUser}>
          Cadastrar
        </Button>
      </Form>
    </PageBuilder>
  );
}
