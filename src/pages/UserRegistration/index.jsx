import PageBuilder from '../../components/PageBuilder';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputRadio from '../../components/InputRadio';
import Button from '../../components/Button';
import Label from '../../components/Label';
import SimpleTitle from '../../components/SimpleTitle';
import './UserRegistration.css';

export default function UserRegistration() {
  return (
    <PageBuilder pageName="Cadastro de Usuário" userName="João Pablo">
      <Form>
        <SimpleTitle>Cadastre-se</SimpleTitle>

        <Label>Nome</Label>
        <Input type="text" name="nome" id="nome"></Input>

        <Label>Email</Label>
        <Input type="email" name="email" id="email"></Input>

        <Label>CRN</Label>
        <Input type="text" name="CRN" id="CRN"></Input>

        <Label>CPF</Label>
        <Input type="text" name="CPF" id="CPF"></Input>

        <Label>Telefone</Label>
        <Input type="tel" name="Telefone" id="Telefone"></Input>

        <Label>Data de nascimento</Label>
        <Input type="date" name="nascimento" id="nascimento"></Input>

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
        <Input type="password" name="Senha" id="Senha"></Input>

        <Label>Confirme sua senha</Label>
        <Input type="password" name="Senha" id="ConfirmarSenha"></Input>

        <Button width="300px">Cadastrar</Button>
      </Form>
    </PageBuilder>
  );
}
