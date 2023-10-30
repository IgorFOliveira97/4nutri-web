import PageBuilder from '../../components/PageBuilder';
import SimpleTitle from '../../components/SimpleTitle';
import InputRadio from '../../components/InputRadio';
import Label from '../../components/Label';
import List from '../../components/List';
import './PaymentPage.css';
export default function PaymentPage() {
  return (
    <PageBuilder pageName="Tela de Pagamento">
      <SimpleTitle>Formas de Pagamento</SimpleTitle>
      <div className="side-card2">
        <div className="side-card-header2">
          <Label>Cartão de Credito</Label>
          <fieldset className="fildset">
            <Label htmlFor={'visa'} id="visa">
              <InputRadio
                name="CartaoCredito"
                id="visa"
                value="VISA"
              ></InputRadio>
            </Label>

            <InputRadio
              name="CartaoCredito"
              id="credito"
              value="MASTER-CARD"
            ></InputRadio>
            <InputRadio
              name="CartaoCredito"
              id="credito"
              value="HIPERCARD"
            ></InputRadio>
          </fieldset>
          <fieldset className="fildset2">
            <List>
              <InputRadio
                name="debito"
                id="bradesco"
                value="1 X Sem juros de R$10,00"
              ></InputRadio>
              <InputRadio
                name="debito"
                id="itau"
                value="1 X Sem juros de R$10,00"
              ></InputRadio>
              <InputRadio
                name="debito"
                id="caixa"
                value="1 X Sem juros de R$10,00"
              ></InputRadio>
              <InputRadio
                name="debito"
                id="banco do brasil"
                value="1 X Sem juros de R$10,00"
              ></InputRadio>
              <InputRadio
                name="debito"
                id="banco do brasil"
                value="1 X Sem juros de R$10,00"
              ></InputRadio>
              <InputRadio
                name="debito"
                id="banco do brasil"
                value="1 X Sem juros de R$10,00"
              ></InputRadio>
            </List>
          </fieldset>
        </div>
        <div className="side-card-body2">
          <Label>Débito Online</Label>
          <fieldset className="fildset">
            <InputRadio
              name="debito"
              id="bradesco"
              value="Brasdesco"
            ></InputRadio>
            <InputRadio name="debito" id="itau" value="Itaú"></InputRadio>
            <InputRadio name="debito" id="caixa" value="Caixa"></InputRadio>
            <InputRadio
              name="debito"
              id="banco do brasil"
              value="Banco do Brasil"
            ></InputRadio>
          </fieldset>
        </div>
      </div>
    </PageBuilder>
  );
}
