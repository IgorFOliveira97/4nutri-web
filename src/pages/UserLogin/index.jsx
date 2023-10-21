import PageBuilder from '../../components/PageBuilder';
import Form from '../../components/Form';
import Input from '../../components/Input';
import SimpleText from '../../components/SimpleText';
import SimpleTitle from '../../components/SimpleTitle';
import Button from '../../components/Button';

export default function UserLogin() {
  return (
    <PageBuilder pageName="Login" userName="João Pablo">
      <Form>
        <SimpleTitle>Entrar</SimpleTitle>
        <br />
        <SimpleText>Email</SimpleText>
        <Input type="email"></Input>

        <SimpleText>Senha</SimpleText>
        <Input type="password"></Input>

        <Button width="300px">Entrar</Button>
      </Form>
    </PageBuilder>
  );
}
