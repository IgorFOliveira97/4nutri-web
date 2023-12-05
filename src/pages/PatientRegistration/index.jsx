import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PageBuilder from '../../components/PageBuilder';
import 'react-tabs/style/react-tabs.css';
import Form from '../../components/Form';
import SimpleTitle from '../../components/SimpleTitle';
import Label from '../../components/Label';
import Input from '../../components/Input';
import InputRadio from '../../components/InputRadio';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import { insertMaskInCpf } from '../../components/cpf';
import { differenceInYears, parseISO } from 'date-fns';
import './PatientRegistration.css';
import { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import handleInputChange from '../../handlers/input.handler';
import { Context } from '../../Context/AuthProvider';

export default function PatientRegistration() {
  const { userData } = useContext(Context);
  const [status, setStatus] = useState({
    type: '',
    mensagem: '',
  });
  const [patientData, setPatientData] = useState({
    nutritionist_id: userData._id,
    name: '',
    cpf: '',
    phone: '',
    mobile: '',
    birth_date: '',
    gender: '',
    email: '',
    photo: '',
    weight: '',
    height: '',
    bmi: '',
    skinfold_thickness: '',
    growth_curve: '',
    gestational_curve: '',
  });

  const savePatient = async (event) => {
    event.preventDefault();
    await axios
      .post('patient', patientData)
      .then((response) => {
        if (response.status == 201) {
          toast.success('Paciente cadastrado com sucesso!');
        } else {
          toast.error('Houve um erro no cadastro de pacientes!');
          console.error(response);
        }
      })
      .catch((error) => {
        toast.error('Houve um erro no cadastro de pacientes!');
        console.error(error);
      });
  };
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );
  const validateBirthDate = (birthDate) => {
    const currentDate = new Date();
    const parsedBirthDate = parseISO(birthDate);
    const age = differenceInYears(currentDate, parsedBirthDate);
    if (age < 18) {
      return false;
    }
    return true;
  };
  function validate() {
    if (!userData.name)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo nome!',
      });
    if (!userData.email)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo email!',
      });
    if (!validEmail.test(userData.email)) {
      return setStatus({
        type: 'error',
        mensagem: 'Email invalido',
      });
    }

    if (!userData.phone)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo telefone!',
      });
    if (!userData.mobile)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo celular!',
      });
    if (userData.mobile.length < 11)
      return setStatus({
        type: 'error',
        mensagem: 'Número invalido!',
      });
    if (!userData.birth_date)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo data de nascimento!',
      });
    if (!validateBirthDate(userData.birth_date)) {
      return setStatus({
        type: 'error',
        mensagem: 'Data invalida!',
      });
    }
    if (!userData.gender)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario selecionar o seu genero!',
      });
    if (!userData.weight)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario inserir seu peso',
      });
    if (!userData.height)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario inserir sua altura',
      });
    if (!userData.bmi)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario inserir seu IMC',
      });
    if (!userData.skinfold_thickness)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario inserir sua Espessura da dobra cutânea!',
      });
    if (!userData.growth_curve)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario inserir sua curva crescimento!',
      });
    if (!userData.gestational_curve)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario inserir sua curva gestacional!',
      });

    return true;
  }
  return (
    <PageBuilder pageName="Cadastre seu paciente">
      <Tabs>
        <TabList className="tabela">
          <Tab>Dados Pessoais</Tab>
          <Tab>Medidas</Tab>
          <Tab>Recordatorio</Tab>
          <Tab>Medicamentos</Tab>
          <Tab>Intolerancia</Tab>
        </TabList>
        <TabPanel>
          <Form>
            <SimpleTitle>Dados Pessoais</SimpleTitle>
            <Label>Nome</Label>
            <Input
              type="text"
              name="name"
              id="nome"
              placeholder="Nome do Paciente"
              value={patientData.name}
              onChange={(event) => handleInputChange(event, setPatientData)}
            ></Input>
            <Label>CPF</Label>
            <Input
              type="text"
              name="cpf"
              id="cpf"
              value={insertMaskInCpf(patientData.cpf)}
              onChange={(event) => {
                handleInputChange(event, setPatientData);
              }}
            ></Input>
            <Label>Telefone</Label>
            <Input
              type="tel"
              name="phone"
              id="Telefone"
              value={patientData.phone}
              onChange={(event) => handleInputChange(event, setPatientData)}
            ></Input>

            <Label>Celular</Label>
            <Input
              type="tel"
              name="mobile"
              id="mobile"
              value={patientData.mobile}
              onChange={(event) => handleInputChange(event, setPatientData)}
            ></Input>

            <Label>Data de nascimento</Label>
            <Input
              type="date"
              name="birth_date"
              id="nascimento"
              value={patientData.birth_date}
              onChange={(event) => handleInputChange(event, setPatientData)}
            ></Input>

            <Label>Gênero</Label>
            <fieldset className="fildset">
              <InputRadio
                name="gender"
                id="masculino"
                value="Masculino"
                onChange={(event) => handleInputChange(event, setPatientData)}
              ></InputRadio>
              <InputRadio
                name="gender"
                id="feminino"
                value="Feminino"
                onChange={(event) => handleInputChange(event, setPatientData)}
              ></InputRadio>
              <InputRadio
                name="gender"
                id="outro"
                value="Outro"
                onChange={(event) => handleInputChange(event, setPatientData)}
              ></InputRadio>
            </fieldset>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={patientData.email}
              onChange={(event) => handleInputChange(event, setPatientData)}
            ></Input>

            <Label>Foto</Label>
            <Input
              type="file"
              name="photo"
              accept="image/*"
              value={patientData.photo}
              onChange={(event) => handleInputChange(event, setPatientData)}
            ></Input>
          </Form>
        </TabPanel>
        <TabPanel>
          <Form>
            <SimpleTitle>Medidas Antropometricas</SimpleTitle>
            <Label>Peso</Label>
            <Input
              type="text"
              name="weight"
              value={patientData.weight}
              onChange={(event) => handleInputChange(event, setPatientData)}
            ></Input>
            <Label>Altura</Label>
            <Input
              type="number"
              name="height"
              value={patientData.height}
              onChange={(event) => handleInputChange(event, setPatientData)}
            ></Input>
            <Label>IMC</Label>
            <Input
              type="number"
              name="bmi"
              value={patientData.bmi}
              onChange={(event) => handleInputChange(event, setPatientData)}
            ></Input>
            <Label>Dobras Cutaneas</Label>
            <Input
              type="number"
              name="skinfold_thickness"
              value={patientData.skinfold_thickness}
              onChange={(event) => handleInputChange(event, setPatientData)}
            ></Input>
            <Label>Curva de Crescimento</Label>
            <Input
              type="number"
              name="growth_curve"
              value={patientData.growth_curve}
              onChange={(event) => handleInputChange(event, setPatientData)}
            ></Input>
            <Label>Curva Gestacional</Label>
            <Input
              type="number"
              name="gestational_curve"
              value={patientData.gestational_curve}
              onChange={(event) => handleInputChange(event, setPatientData)}
            ></Input>
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
        <TabPanel>
          <Form>
            <SimpleTitle>Medicamentos</SimpleTitle>
            <Label>Medicamentos que o paciente consome</Label>
            <TextArea rows="5" cols="40"></TextArea>
          </Form>
        </TabPanel>
        <TabPanel>
          <Form>
            <SimpleTitle>Intolerancia e alergias</SimpleTitle>
            <Label>
              Descreva tudo o que o paciente tiver de alergias e intolerancia
            </Label>
            <TextArea rows="7" cols="40"></TextArea>
            <Button onClick={savePatient}>Enviar</Button>
          </Form>
        </TabPanel>
      </Tabs>
    </PageBuilder>
  );
}
