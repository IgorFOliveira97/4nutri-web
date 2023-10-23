import PageBuilder from '../../components/PageBuilder';
import TextArea from '../../components/TextAreaWithLabel';
import Form from '../../components/Form';
import Container from '../../components/Container';
import SimpleTitle from '../../components/SimpleTitle';
import Button from '../../components/Button';
import './user.css';
import OutlineButton from '../../components/OutlineButton';
import Input from '../../components/Input';
import { useState } from 'react';
import Label from '../../components/Label';
import { toast } from 'react-toastify';
export default function User() {
  const [editDataMode, setEditDataMode] = useState(false);
  const [editAddressMode, setEditAddressMode] = useState(false);

  const alterEditDataMode = (event) => {
    event.preventDefault();
    setEditDataMode(!editDataMode);
  };
  const alterEditAddressMode = (event) => {
    event.preventDefault();
    setEditAddressMode(!editAddressMode);
  };

  const saveEdit = (event) => {
    console.log(event);
    event.preventDefault();
    toast.success('Dados editados com sucesso!');
  };
  return (
    <PageBuilder pageName="Meus Dados" userName="João Pablo">
      <Container>
        <Form>
          <SimpleTitle>Dados pessoais</SimpleTitle>
          {!editDataMode ? (
            <>
              <TextArea width="80%" label="Nome">
                João Pablo Vilanir
              </TextArea>
              <TextArea width="80%" label="Data de Nascimento">
                14/10/2002
              </TextArea>
              <TextArea width="80%" label="CRN">
                123-456
              </TextArea>
              <TextArea width="80%" label="CPF">
                111.111.111-11
              </TextArea>
              <TextArea width="80%" label="E-mail">
                joaopablo778@gmail.com
              </TextArea>
              <TextArea width="80%" label="Celular">
                (11) 95355-3207
              </TextArea>
              <TextArea width="80%" label="Telefone">
                (11) 4245-8911
              </TextArea>
              <Button onClick={alterEditDataMode}>Editar</Button>
            </>
          ) : (
            <>
              <Label>Nome</Label>
              <Input type="text" placeholder="Digite o nome"></Input>
              <Label>Data de Nascimento</Label>
              <Input type="date"></Input>
              <Label>CRN</Label>
              <Input type="text" placeholder="Digite o CRN"></Input>
              <Label>CPF</Label>
              <Input type="text" placeholder="Digite o CPF"></Input>
              <Label>E-mail</Label>
              <Input type="email" placeholder="exemplo@gmail.com"></Input>
              <Label>Celular</Label>
              <Input type="text" placeholder="Digite o celular"></Input>
              <Label>Telefone</Label>
              <Input type="text" placeholder="Digite o telefone"></Input>
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
