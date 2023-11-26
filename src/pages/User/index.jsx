import './user.css';
import PageBuilder from '../../components/PageBuilder';
import TextAreaWithLabel from '../../components/TextAreaWithLabel';
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

  const [user, setUser] = useState({
    name: '',
    crn: '',
    cpf: '',
    email: '',
    phone: '',
    mobile: '',
    birth_date: '',
    gender: '',
    cep: '',
    street: '',
    address_number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  const getAddressFromCep = async (cep) => {
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${cep}`
      );
      console.log(response);
      if (response.status == 200) {
        const addressData = await response.json();
        setUser((user) => ({
          ...user,
          street: addressData.street,
          neighborhood: addressData.neighborhood,
          city: addressData.city,
          state: addressData.state,
        }));
      } else {
        toast.error('Digite um CEP válido!');
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao consultar CEP');
    }
  };

  const editUser = async () => {
    axios
      .put(`nutritionist/${params.id}`, user)
      .then((response) => {
        if (response.status == 200) {
          toast.success('Dados editados com sucesso!');
          alterEditDataMode();
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

  const alterEditDataMode = () => {
    setEditDataMode(!editDataMode);
  };

  const saveEdit = (event) => {
    event.preventDefault();
    editUser();
  };

  useEffect(() => {
    axios.get(`nutritionist/${params.id}`).then((response) => {
      setUser({
        name: response.data.name,
        crn: response.data.crn,
        cpf: response.data.cpf,
        email: response.data.email,
        phone: response.data.phone || '',
        mobile: response.data.mobile || '',
        birth_date: response.data.birth_date,
        gender: response.data.gender,
        password: response.data.password,
        cep: response.data.cep,
        address: response.data.street,
        address_number: response.data.address_number,
        complement: response.data.complement,
        neighborhood: response.data.neighborhood,
        city: response.data.city,
        state: response.data.state,
      });
    });
  }, []);

  return (
    <PageBuilder pageName="Meus Dados">
      <Container>
        <Form>
          <SimpleTitle>Dados pessoais</SimpleTitle>
          {!editDataMode ? (
            <>
              <TextAreaWithLabel width="80%" label="Nome">
                {user.name}
              </TextAreaWithLabel>
              <TextAreaWithLabel width="80%" label="Data de Nascimento">
                {user.birth_date}
              </TextAreaWithLabel>
              <TextAreaWithLabel width="80%" label="CRN">
                {user.crn}
              </TextAreaWithLabel>
              <TextAreaWithLabel width="80%" label="CPF">
                {user.cpf}
              </TextAreaWithLabel>
              <TextAreaWithLabel width="80%" label="E-mail">
                {user.email}
              </TextAreaWithLabel>
              <TextAreaWithLabel width="80%" label="Celular">
                {user.mobile || '(XX) XXXXX-XXXX'}
              </TextAreaWithLabel>
              <TextAreaWithLabel width="80%" label="Telefone">
                {user.phone}
              </TextAreaWithLabel>

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

              <SimpleTitle>Endereço</SimpleTitle>
              <TextAreaWithLabel width="80%" label="CEP">
                {user.cep || 'Não informado'}
              </TextAreaWithLabel>
              <TextAreaWithLabel width="80%" label="Logradouro">
                {user.street || 'Não informado'}
              </TextAreaWithLabel>
              <TextAreaWithLabel width="80%" label="Número">
                {user.address_number || 'Não informado'}
              </TextAreaWithLabel>
              <TextAreaWithLabel width="80%" label="Complemento">
                {user.complement || 'Não informado'}
              </TextAreaWithLabel>
              <TextAreaWithLabel width="80%" label="Bairro">
                {user.neighborhood || 'Não informado'}
              </TextAreaWithLabel>
              <TextAreaWithLabel width="80%" label="Cidade">
                {user.city || 'Não informado'}
              </TextAreaWithLabel>
              <TextAreaWithLabel width="80%" label="UF">
                {user.state || 'Não informado'}
              </TextAreaWithLabel>
              <Button
                onClick={(event) => {
                  event.preventDefault();
                  alterEditDataMode();
                }}
              >
                Editar
              </Button>
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
              <Label>CEP</Label>
              <Input
                type="text"
                placeholder="Digite o CEP"
                name="cep"
                value={user.cep}
                onChange={(event) => {
                  handleInputChange(event, setUser);
                  // getAddressFromCep(user.cep);
                }}
                onBlur={() => getAddressFromCep(user.cep)}
              ></Input>

              <Label>Logradouro</Label>
              <Input
                type="text"
                placeholder="Digite o logradouro"
                name="street"
                value={user.street}
                onChange={(event) => handleInputChange(event, setUser)}
              ></Input>

              <Label>Número</Label>
              <Input
                type="text"
                placeholder="Digite o número"
                name="address_number"
                value={user.address_number}
                onChange={(event) => handleInputChange(event, setUser)}
              ></Input>

              <Label>Complemento</Label>
              <Input
                type="text"
                placeholder="Digite o complemento"
                name="complement"
                value={user.complement}
                onChange={(event) => handleInputChange(event, setUser)}
              ></Input>

              <Label>Bairro</Label>
              <Input
                type="text"
                placeholder="Digite o bairro"
                name="neighborhood"
                value={user.neighborhood}
                onChange={(event) => handleInputChange(event, setUser)}
              ></Input>

              <Label>Cidade</Label>
              <Input
                type="text"
                placeholder="Digite a cidade"
                name="city"
                value={user.city}
                onChange={(event) => handleInputChange(event, setUser)}
              ></Input>

              <Label>UF</Label>
              <Input
                type="text"
                placeholder="Digite a UF"
                name="state"
                value={user.state}
                onChange={(event) => handleInputChange(event, setUser)}
              ></Input>
              <Container>
                <OutlineButton onClick={alterEditDataMode}>
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
