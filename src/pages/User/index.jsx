import './user.css';
import PageBuilder from '../../components/PageBuilder';
import TextArea from '../../components/TextAreaWithLabel';
import Form from '../../components/Form';
import Container from '../../components/Container';
import SimpleTitle from '../../components/SimpleTitle';
import Button from '../../components/Button';
import OutlineButton from '../../components/OutlineButton';
import Input from '../../components/Input';
import { useEffect, useState } from 'react';
import Label from '../../components/Label';
import { toast } from 'react-toastify';
import handleInputChange from '../../handlers/input.handler';
import InputRadio from '../../components/InputRadio';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function User() {
  const params = useParams();
  const [editDataMode, setEditDataMode] = useState(false);
  const [editAddressMode, setEditAddressMode] = useState(false);
  const [user, setUser] = useState();

  const [editUserRequest, setEditUserRequest] = useState({
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

  useEffect(() => {
    axios.get(`nutritionist/${params.id}`).then({
      name: user.name,
      crn: user.crn,
      cpf: user.cpf,
      email: user.email,
      phone: user.phone || '',
      mobile: user.mobile || '',
      birth_date: user.birth_date,
      gender: user.gender,
      password: user.password,
    });
  }, []);

  const editUser = async () => {
    axios
      .put(`nutritionists/${user._id}`, user)
      .then((response) => {
        if (response.status == 200) {
          toast.success('Dados editados com sucesso!');
          alterEditDataMode;
        } else {
          toast.error('Houve um erro na edição!');
          console.error(response.data);
        }
      })
      .catch((error) => {
        toast.error('Houve um erro na edição!');
        console.error(error);
      });
  };

  const alterEditDataMode = (event) => {
    event.preventDefault();
    setEditDataMode(!editDataMode);
  };
  const alterEditAddressMode = (event) => {
    event.preventDefault();
    setEditAddressMode(!editAddressMode);
  };

  const saveEdit = (event) => {
    event.preventDefault();
    editUser();
  };

  return (
    <PageBuilder pageName="Meus Dados" userName="João Pablo">
      <Container>
        <Form>
          <SimpleTitle>Dados pessoais</SimpleTitle>
          {!editDataMode ? (
            <>
              <TextArea width="80%" label="Nome">
                {user.name}
              </TextArea>
              <TextArea width="80%" label="Data de Nascimento">
                {user.birth_date}
              </TextArea>
              <TextArea width="80%" label="CRN">
                {user.crn}
              </TextArea>
              <TextArea width="80%" label="CPF">
                {user.cpf}
              </TextArea>
              <TextArea width="80%" label="E-mail">
                {user.email}
              </TextArea>
              <TextArea width="80%" label="Celular">
                {user.mobile || '(XX) XXXXX-XXXX'}
              </TextArea>
              <TextArea width="80%" label="Telefone">
                {user.phone}
              </TextArea>
              <Button onClick={alterEditDataMode}>Editar</Button>
            </>
          ) : (
            <>
              <Label>Nome</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={(event) => handleInputChange(event, setUser)}
              ></Input>

              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={(event) => handleInputChange(event, setUser)}
              ></Input>

              <Label>CRN</Label>
              <Input
                type="text"
                name="crn"
                id="crn"
                value={user.crn}
                onChange={(event) => handleInputChange(event, setUser)}
              ></Input>

              <Label>CPF</Label>
              <Input
                type="text"
                name="cpf"
                id="cpf"
                value={user.cpf}
                onChange={(event) => handleInputChange(event, setUser)}
              ></Input>

              <Label>Telefone</Label>
              <Input
                type="text"
                name="phone"
                id="phone"
                value={user.phone}
                onChange={(event) => handleInputChange(event, setUser)}
              ></Input>

              <Label>Celular</Label>
              <Input
                type="text"
                name="mobile"
                id="mobile"
                value={user.mobile}
                onChange={(event) => handleInputChange(event, setUser)}
              ></Input>

              <Label>Data de nascimento</Label>
              <Input
                type="date"
                name="birth_date"
                id="birth_date"
                value={user.birth_date}
                onChange={(event) => handleInputChange(event, setUser)}
              ></Input>

              <Label>Gênero</Label>
              <fieldset className="fildset">
                <InputRadio
                  name="gender"
                  id="masculino"
                  value="Masculino"
                  checked={user.gender === 'Masculino'}
                  onChange={(event) => handleInputChange(event, setUser)}
                />
                <InputRadio
                  name="gender"
                  id="feminino"
                  value="Feminino"
                  checked={user.gender === 'Feminino'}
                  onChange={(event) => handleInputChange(event, setUser)}
                />
                <InputRadio
                  name="gender"
                  id="outro"
                  value="Outro"
                  checked={user.gender === 'Outro'}
                  onChange={(event) => handleInputChange(event, setUser)}
                />
              </fieldset>
              <Container>
                <OutlineButton onClick={alterEditDataMode}>
                  Voltar
                </OutlineButton>
                <Button onClick={saveEdit}>Salvar</Button>
              </Container>
            </>
          )}
        </Form>

        <Form>
          <SimpleTitle>Endereço</SimpleTitle>
          {!editAddressMode ? (
            <>
              <TextArea width="80%" label="CEP">
                06783-111
              </TextArea>
              <TextArea width="80%" label="Logradouro">
                Rua Antonio da Silva Pina
              </TextArea>
              <TextArea width="80%" label="Número">
                31
              </TextArea>
              <TextArea width="80%" label="Complemento">
                Não fornecido
              </TextArea>
              <TextArea width="80%" label="Bairro">
                Jardim Record
              </TextArea>
              <TextArea width="80%" label="Cidade">
                Taboão Da Serra
              </TextArea>
              <TextArea width="80%" label="UF">
                SP
              </TextArea>

              <Button onClick={alterEditAddressMode}>Editar</Button>
            </>
          ) : (
            <>
              <Label>CEP</Label>
              <Input type="text" placeholder="Digite o CEP"></Input>

              <Label>Logradouro</Label>
              <Input type="text" placeholder="Digite o logradouro"></Input>

              <Label>Número</Label>
              <Input type="text" placeholder="Digite o número"></Input>

              <Label>Complemento</Label>
              <Input type="text" placeholder="Digite o complemento"></Input>

              <Label>Bairro</Label>
              <Input type="text" placeholder="Digite o bairro"></Input>

              <Label>Cidade</Label>
              <Input type="text" placeholder="Digite a cidade"></Input>

              <Label>UF</Label>
              <Input type="text" placeholder="Digite a UF"></Input>

              <Container>
                <OutlineButton onClick={alterEditAddressMode}>
                  Voltar
                </OutlineButton>
                <Button onClick={saveEdit}>Salvar</Button>
              </Container>
            </>
          )}
        </Form>
      </Container>
    </PageBuilder>
  );
}
