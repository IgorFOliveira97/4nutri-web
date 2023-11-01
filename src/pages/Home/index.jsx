import React from 'react';
import './home.css';
import PageBuilder from '../../components/PageBuilder';
import Card from '../../components/Card';
import Container from '../../components/Container';
import SideCard from '../../components/SideCard';
import SimpleText from '../../components/SimpleText';
import DecorativeText from '../../components/DecorativeText';
import Item from '../../components/Item';
import List from '../../components/List';

function Home() {
  return (
    <PageBuilder>
      <SideCard title="Ofereça o melhor atendimento nutricional para seus pacientes">
        <List>
          <Item>Planos alimentares calculados ou livres</Item>
          <Item>Protocolos de Antropometria e Gastos Energéticos</Item>
          <Item>Gráficos de evolução</Item>
          <Item>
            Solicitação de exames laboratoriais e análise dos resultados
          </Item>
          <Item>
            Questionários pré consulta, recordatório 24h e anamnese interativa
          </Item>
          <Item>Prescrições de Suplementos e fitoterápicos</Item>
        </List>
      </SideCard>
      <h1 className="teste">PLANOS E PREÇOS</h1>
      <p className="teste1">
        Escolha o plano que mais se adequa às suas necessidades e
      </p>
      <p className="teste2">
        faça mais com todos os recursos do 4NUTRI para assinantes.
      </p>
      <Container>
        <Card title="Plano Anual Standard" button="Assinar" color="#8FBC8F">
          <SimpleText>
            Proporcionando uma análise nutricional abrangente, o software
            Standard oferece recursos essenciais para o acompanhamento preciso
            da dieta, garantindo um suporte eficaz às metas nutricionais dos
            clientes.promovendo resultados excepcionais para os pacientes.
            <p className="text">equivalente a</p>
          </SimpleText>
          <DecorativeText>R$ 19,90 /mês</DecorativeText>
          <SimpleText className="discount-paragraph">
            R$ 238,90 à vista
          </SimpleText>
        </Card>
        <Card title="Plano Anual Premium" button="Assinar" color="#3CB371">
          <SimpleText>
            Com funcionalidades avançadas de personalização e relatórios
            detalhados, o software Premium eleva a prática nutricional a um novo
            patamar, proporcionando insights aprofundados e promovendo
            resultados excepcionais para os pacientes.
          </SimpleText>
          <p className="text">equivalente a</p>
          <DecorativeText>R$ 19,90 /mês</DecorativeText>
          <SimpleText className="discount-paragraph">
            R$ 238,90 à vista
          </SimpleText>
        </Card>
        <Card title="Plano Anual Combo" button="Assinar" color="#006400">
          <SimpleText>
            O plano Combo oferece a combinação ideal de recursos do Standard e
            do Premium, proporcionando ao nutricionista uma ferramenta completa
            e integrada para otimizar a gestão de pacientes, personalização de
            dietas e análise avançada de dados nutricionais.
          </SimpleText>
          <p className="text">equivalente a</p>
          <DecorativeText>R$ 56,24 /mês</DecorativeText>
          <SimpleText className="discount-paragraph">
            R$ 674,90 à vista
          </SimpleText>
        </Card>
      </Container>
    </PageBuilder>
  );
}
export default Home;
