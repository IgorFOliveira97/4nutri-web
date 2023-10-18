import SimpleText from "../../SimpleText";
import SimpleTitle from "../../SimpleTitle";
import PaymentPlansButton from "../../Button/PaymentPlans"
import './paymentPlans.css';

function PaymentPlans() {
  return (
      <div className="card-container">
        <div className="card">
          <SimpleTitle>
            <h2>Plano anual
              Standard
            </h2>
          </SimpleTitle>
          <SimpleText>
            <p className="text-simple">"Proporcionando uma análise nutricional
              abrangente, o software Standard oferece
              recursos essenciais para o
              acompanhamento preciso da dieta,
              garantindo um suporte eficaz às metas nutricionais</p> <p>dos clientes."</p>
            <p className="text">equivalente a</p>
          </SimpleText>
          <p className="special-paragraph">R$ 19,90 /mês</p>
          <p className="discount-paragraph">R$ 238,90 à vista</p>
          <PaymentPlansButton />
        </div>

        <div className="card">
          <SimpleTitle>
            <h2>Plano anual
              Premium
            </h2>
          </SimpleTitle>
          <SimpleText>
            <p className="text-simple">"Com funcionalidades avançadas de
              personalização e relatórios detalhados, o
              software Premium eleva a prática
              nutricional a um novo patamar,
              proporcionando insights aprofundados e
              promovendo resultados excepcionais para os pacientes."</p>
            <p className="text">equivalente a</p>
          </SimpleText>
          <p className="special-paragraph">R$ 19,90 /mês</p>
          <p className="discount-paragraph">R$ 238,90 à vista</p>
          <PaymentPlansButton />
        </div>
        <div className="card">
          <SimpleTitle>
            <h2>Plano anual
              combo
            </h2>
          </SimpleTitle>
          <SimpleText>
            <p className="text-simple">
              "O plano Combo oferece a combinação
              ideal de recursos do Standard e do
              Premium, proporcionando ao nutricionista
              uma ferramenta completa e integrada para
              otimizar a gestão de pacientes,
              personalização de dietas e análise
              avançada de dados nutricionais."</p>
            <p className="text">equivalente a</p>
          </SimpleText>
          <p className="special-paragraph">R$ 56,24 /mês</p>
          <p className="discount-paragraph">R$ 674,90 à vista</p>
          <PaymentPlansButton />
        </div>
      </div>
  )
}
export default PaymentPlans