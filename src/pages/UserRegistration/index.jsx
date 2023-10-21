import PageBuilder from '../../components/PageBuilder';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputRadio from '../../components/InputRadio';
import Button from '../../components/Button';
import SimpleText from '../../components/SimpleText';
import SimpleTitle from '../../components/SimpleTitle';
import './UserRegistration.css';

export default function UserRegistration() {
  return (
    <PageBuilder pageName="Cadastro de Usuário" userName="João Pablo">
      <Form>
        <SimpleTitle>Cadastre-se</SimpleTitle>
        <br />
        <SimpleText>Nome</SimpleText>
        <Input type="text" name="nome" id="nome"></Input>

        <SimpleText>Email</SimpleText>
        <Input type="email" name="email" id="email"></Input>

        <SimpleText>CRN</SimpleText>
        <Input type="text" name="CRN" id="CRN"></Input>

        <SimpleText>CPF</SimpleText>
        <Input type="text" name="CPF" id="CPF"></Input>

        <SimpleText>Telefone</SimpleText>
        <Input type="tel" name="Telefone" id="Telefone"></Input>

        <SimpleText>Data de nascimento</SimpleText>
        <Input type="date" name="nascimento" id="nascimento"></Input>

        <SimpleText>Gênero</SimpleText>
        <fieldset className="fildsetStyle">
          <InputRadio name="genero" id="genero" value="Masculino"></InputRadio>
          <InputRadio name="genero" id="genero" value="Feminino"></InputRadio>
          <InputRadio name="genero" id="genero" value="Outros"></InputRadio>
        </fieldset>

        <SimpleText>Senha</SimpleText>
        <Input type="password" name="Senha" id="Senha"></Input>

        <SimpleText>Confirme sua senha</SimpleText>
        <Input type="password" name="Senha" id="Senha"></Input>

        <Button width="300px">Cadastrar</Button>
      </Form>
    </PageBuilder>
  );
}
