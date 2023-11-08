import PageBuilder from '../../components/PageBuilder';
import Form from '../../components/Form';
import Container from '../../components/Container';
import SimpleTitle from '../../components/SimpleTitle';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Textarea from '../../components/TextArea';
import './foods.css';
import Button from '../../components/Button';

export default function FoodsRegistration() {
  return (
    <PageBuilder pageName="Cadastre um novo alimento" userName="João Pablo">
      <Container>
        <Form>
          <SimpleTitle>Novo Alimento</SimpleTitle>
          <br />
          <p></p>
          <Label>Nome do alimento</Label>
          <Input type="text" placeholder="Digite o nome"></Input>
          <Label>Descrição</Label>
          <Textarea type="text" placeholder="Descrição"></Textarea>
          <Label>Calcio</Label>
          <Input type="number" placeholder="mg"></Input>
          <Label>Magnesio</Label>
          <Input type="number" placeholder="mg"></Input>
          <Label>Vitamina C</Label>
          <Input type="number" placeholder="mg"></Input>
          <Label>Energia</Label>
          <Input type="number" placeholder="kcal"></Input>
          <Label>Proteina</Label>
          <Input type="number" placeholder="g"></Input>
          <Label>Lipideos</Label>
          <Input type="number" placeholder="g"></Input>
          <Label>Colesterol</Label>
          <Input type="number" placeholder="mg"></Input>
          <Label>Carboidrato</Label>
          <Input type="number" placeholder="g"></Input>
          <Label>Fibra Alimentar</Label>
          <Input type="number" placeholder="g"></Input>
          <Button>Cadastrar</Button>
        </Form>
      </Container>
    </PageBuilder>
  );
}
