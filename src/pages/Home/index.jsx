import React, { useContext } from 'react';
import './home.css';
import PageBuilder from '../../components/PageBuilder';
import Card from '../../components/Card';
import Container from '../../components/Container';
import SideCard from '../../components/SideCard';
import SimpleText from '../../components/SimpleText';
import DecorativeText from '../../components/DecorativeText';
import Item from '../../components/Item';
import List from '../../components/List';
import { Context } from '../../Context/AuthProvider';
import SimpleTitle from '../../components/SimpleTitle';

function Home() {
  const { authenticated, userData, loading } = useContext(Context);

  return (
    <PageBuilder>
      {!authenticated && !userData && !loading ? (
        <>
          <SideCard title="Ofereça o melhor atendimento nutricional para seus pacientes">
            <List>
              <Item>Planos alimentares calculados ou livres</Item>
              <Item>
                Questionários pré consulta, recordatório 24h e anamnese
                interativa
              </Item>
              <Item>Protocolos de Antropometria e Gastos Energéticos</Item>
              <Item>Gráficos de evolução</Item>
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
                Oferece análise nutricional abrangente e recursos essenciais
                para o acompanhamento preciso da dieta. Suporte eficaz às metas
                nutricionais dos clientes, promovendo resultados excepcionais
                para até 15 pacientes.
              </SimpleText>
              <DecorativeText>R$ 19,90/mês</DecorativeText>
              <span className="text">ou</span>
              <SimpleText className="discount-paragraph">
                R$ 238,90 à vista
              </SimpleText>
            </Card>
            <Card title="Plano Anual Premium" button="Assinar" color="#3CB371">
              <SimpleText>
                Funcionalidades avançadas de personalização e relatórios
                detalhados elevam a prática nutricional. Proporciona insights
                aprofundados e promove resultados excepcionais para até 30
                pacientes.
              </SimpleText>
              <DecorativeText>R$ 19,90/mês</DecorativeText>
              <span className="text">ou</span>
              <SimpleText className="discount-paragraph">
                R$ 238,90 à vista
              </SimpleText>
            </Card>
            <Card title="Plano Anual Combo" button="Assinar" color="#006400">
              <SimpleText>
                Oferece a combinação ideal de recursos do Standard e do Premium.
                Ferramenta completa e integrada para otimizar a gestão de
                pacientes, personalização de dietas e análise avançada de dados
                nutricionais, sem limite de pacientes.
              </SimpleText>
              <DecorativeText>R$ 56,24/mês</DecorativeText>
              <span className="text">ou</span>
              <SimpleText className="discount-paragraph">
                R$ 674,90 à vista
              </SimpleText>
            </Card>
          </Container>
        </>
      ) : (
        <Container>
          {userData && (
            <SimpleTitle>Seja bem-vindo(a) {userData?.name}</SimpleTitle>
          )}
        </Container>
      )}
    </PageBuilder>
  );
}
export default Home;
