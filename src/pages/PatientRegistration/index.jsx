import PageBuilder from '../../components/PageBuilder';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Form from '../../components/Form';
import SimpleTitle from '../../components/SimpleTitle';
import Label from '../../components/Label';
import Input from '../../components/Input';
import InputRadio from '../../components/InputRadio';
import TextArea from '../../components/TextArea';

export default function PatientRegistration() {
  return (
    <PageBuilder pageName="Registre seu pacientee" userName="João Pablo">
      <Tabs>
        <TabList>
          <Tab>Dados Pessoais</Tab>
          <Tab>Medidas</Tab>
          <Tab>Recordatorio</Tab>
        </TabList>
        <TabPanel>
          <Form>
            <SimpleTitle>Dados Pessoais</SimpleTitle>
            <Label>Nome</Label>
            <Input type="text" name="nome" id="nome"></Input>

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
              <InputRadio
                name="genero"
                id="feminino"
                value="Feminino"
              ></InputRadio>
              <InputRadio name="genero" id="outro" value="Outro"></InputRadio>
            </fieldset>
            <Label>Email</Label>
            <Input type="email" name="email" id="email"></Input>
          </Form>
        </TabPanel>
        <TabPanel>
          <Form>
            <SimpleTitle>Dados de medidas</SimpleTitle>
            <Label>Peso</Label>
            <Input type="text"></Input>
            <Label>Altura</Label>
            <Input type="number"></Input>
            <Label>IMC</Label>
            <Input type="number"></Input>
            <Label>Dobras Cutaneas</Label>
            <Input type="number"></Input>
            <Label>Curva de Crescimento</Label>
            <Input type="number"></Input>
            <Label>Curva Gestacional</Label>
            <Input type="number"></Input>
          </Form>
        </TabPanel>
        <TabPanel>
          <Form>
            <SimpleTitle>Recordatorio</SimpleTitle>
            <Label>Café da Manhã</Label>
            <TextArea rows="5" cols="33"></TextArea>
            <Label> Almoço</Label>
            <TextArea rows="5" cols="33"></TextArea>
            <Label>Lanche da Tarde</Label>
            <TextArea rows="5" cols="33"></TextArea>
            <Label>Jantar</Label>
            <TextArea rows="5" cols="33"></TextArea>
            <Label>Ceia</Label>
            <TextArea rows="5" cols="33"></TextArea>
          </Form>
        </TabPanel>
      </Tabs>
    </PageBuilder>
  );
}
