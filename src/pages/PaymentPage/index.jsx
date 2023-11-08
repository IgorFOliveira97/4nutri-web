import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import PageBuilder from '../../components/PageBuilder';
import Select from '../../components/Select';
import Options from '../../components/Options';
import './PaymentPage.css';
import SelectParcelas from '../../components/SelectParcela';

export default function PaymentPage() {
  const navigate = useNavigate();

  return (
    <PageBuilder pageName="Tela de Pagamento">
      <Form>
        <Input
          type="text"
          required
          placeholder="Nome Completo"
          name="nome"
        ></Input>
        <Input type="email" required placeholder="E-mail" name="email"></Input>
        <Input type="text" required placeholder="CPF" name="cpf"></Input>
        <Input
          type="text"
          required
          placeholder="celular com DDD"
          name="celular"
        ></Input>

        <div className="info-credit-card">
          <Input
            required
            placeholder="Número do cartão"
            type="text"
            name="card_number"
          ></Input>
          <div className="container-select">
            <Select required name="month">
              <Options selected disabled value>
                Mês
              </Options>
              <Options value="01">01</Options>
              <Options value="02">02</Options>
              <Options value="03">03</Options>
              <Options value="04">04</Options>
              <Options value="05">05</Options>
              <Options value="06">06</Options>
              <Options value="07">07</Options>
              <Options value="08">08</Options>
              <Options value="09">09</Options>
              <Options value="10">10</Options>
              <Options value="11">11</Options>
              <Options value="12">12</Options>
            </Select>
            <Select required name="year">
              <Options selected disabled value>
                Ano
              </Options>
              <Options value="23">2023</Options>
              <Options value="24">2024</Options>
              <Options value="25">2025</Options>
              <Options value="26">2026</Options>
              <Options value="27">2027</Options>
              <Options value="28">2028</Options>
              <Options value="29">2029</Options>
              <Options value="30">2030</Options>
            </Select>
          </div>
          <Input required placeholder="CVV" type="text" name="CVV"></Input>
        </div>
        <div className="parcelas">
          <SelectParcelas required name="parcelas">
            <Options> Parcelas</Options>
            <Options> 1 X R$150,00</Options>
            <Options> 2 X R$75,00</Options>
            <Options> 3 x R$50,00</Options>
          </SelectParcelas>
        </div>
        <Input type="hidden" name="product_id" value="1xc09"></Input>
        <Input type="hidden" name="product_id" value="297"></Input>
        <br />
        <p>
          <i className="fa-solid fa-user-shield"></i>Nós protegemos seus dados
          de pagamento usando segurança
        </p>
        <p>
          <i className="fa-solid fa-user-shield"></i>A cobrança irá aparecer no
          seu cartão como <b>PG*4NUTRI</b>
        </p>
        <br />
        <Button onClick={() => navigate('/user/registration')}>
          PAGAR AGORA
        </Button>
      </Form>
    </PageBuilder>
  );
}
