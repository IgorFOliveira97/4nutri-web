import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PageBuilder from '../../components/PageBuilder';
import AppointmentModal from '../../components/AppointmentModal';
import Form from '../../components/Form';
import SimpleTitle from '../../components/SimpleTitle';
import Input from '../../components/Input';
import Label from '../../components/Label';
import InputRadio from '../../components/InputRadio';
import Button from '../../components/Button';
import Avatar from '../../assets/images/avatar-padrao.png';
import './PatientDetails.css';
import axios from 'axios';
import { useParams } from 'react-router';
import handleInputChange from '../../handlers/input.handler';
import Container from '../../components/Container';

export default function PatientDetails() {
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleScheduleAppointment = (appointmentData) => {
    // Adicione a lógica para lidar com o agendamento aqui
    console.log('Consulta agendada:', appointmentData);
    toast.success('Consulta agendada com sucesso!');
  };

  const [isEditing, setIsEditing] = useState(false);

  const [patient, setPatient] = useState({
    name: '',
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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    axios
      .put(`patient/${params.id}`, patient)
      .then((response) => {
        if (response.status == 200) {
          setIsEditing(false);
          toast.success('Dados editados com Sucesso');
        } else {
          toast.error('Não foi possível editar os dados do paciente');
          console.error(response.data);
        }
      })
      .catch((error) => {
        toast.error('Houve um erro ao editar os dados do paciente');
        console.error(error);
      });
  };

  useEffect(() => {
    axios.get(`patient/${params.id}`).then((response) => {
      setPatient({
        name: response.data.name,
        phone: response.data.phone,
        mobile: response.data.mobile,
        birth_date: response.data.birth_date,
        gender: response.data.gender,
        email: response.data.email,
        photo: response.data.photo || Avatar,
        weight: response.data.weight,
        height: response.data.height,
        bmi: response.data.bmi,
        skinfold_thickness: response.data.skinfold_thickness,
        growth_curve: response.data.growth_curve,
        gestational_curve: response.data.gestational_curve,
      });
    });
  }, []);

  return (
    <div>
      <PageBuilder>
        <Tabs>
          <TabList className="tab-list">
            <Tab>Dados Pessoais</Tab>
            <Tab>Consultas</Tab>
          </TabList>
          <TabPanel className="tab-panel">
            {patient && (
              <>
                <Form>
                  <img
                    src={patient.photo || Avatar}
                    alt={`Foto de ${patient.name}`}
                  />
                  <SimpleTitle>
                    {isEditing ? 'Editar informações' : 'Detalhes do Paciente'}
                  </SimpleTitle>
                  <Label>Nome</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={patient.name}
                    onChange={(event) => handleInputChange(event, setPatient)}
                    disabled={!isEditing}
                  />
                  <Label>Telefone</Label>
                  <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={patient.phone}
                    onChange={(event) => handleInputChange(event, setPatient)}
                    disabled={!isEditing}
                  />
                  <Label>Data de nascimento</Label>
                  <Input
                    type="date"
                    name="birth_date"
                    id="birth_date"
                    value={patient.birth_date}
                    onChange={(event) => handleInputChange(event, setPatient)}
                    disabled={!isEditing}
                  />
                  <Label>Gênero</Label>
                  <fieldset className="fildset">
                    <InputRadio
                      name="gender"
                      id="masculino"
                      value="Masculino"
                      checked={patient.gender === 'Masculino'}
                      onChange={(event) => handleInputChange(event, setPatient)}
                      disabled={!isEditing}
                    />
                    <InputRadio
                      name="gender"
                      id="feminino"
                      value="Feminino"
                      checked={patient.gender === 'Feminino'}
                      onChange={(event) => handleInputChange(event, setPatient)}
                      disabled={!isEditing}
                    />
                    <InputRadio
                      name="gender"
                      id="outro"
                      value="Outro"
                      checked={patient.gender === 'Outro'}
                      onChange={(event) => handleInputChange(event, setPatient)}
                      disabled={!isEditing}
                    />
                  </fieldset>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={patient.email}
                    onChange={(event) => handleInputChange(event, setPatient)}
                    disabled={!isEditing}
                  ></Input>
                  <SimpleTitle>Medidas Antropometricas</SimpleTitle>
                  <Label>Peso</Label>
                  <Input
                    type="text"
                    name="weigth"
                    value={patient.weight}
                    onChange={(event) => handleInputChange(event, setPatient)}
                    disabled={!isEditing}
                  />
                  <Label>Altura</Label>
                  <Input
                    type="number"
                    name="height"
                    value={patient.height}
                    onChange={(event) => handleInputChange(event, setPatient)}
                    disabled={!isEditing}
                  ></Input>
                  <Label>IMC</Label>
                  <Input
                    type="number"
                    name="bmi"
                    value={patient.bmi}
                    onChange={(event) => handleInputChange(event, setPatient)}
                    disabled={!isEditing}
                  ></Input>
                </Form>
                <Container>
                  {isEditing ? (
                    <Button onClick={saveEdit}>Salvar</Button>
                  ) : (
                    <Button onClick={handleEditClick}>Editar</Button>
                  )}
                  <Button onClick={() => setIsModalOpen(true)}>
                    Nova consulta
                  </Button>
                </Container>
              </>
            )}
          </TabPanel>
          <TabPanel>
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Nome</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>João</td>
                  <td>joao@example.com</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Maria</td>
                  <td>maria@example.com</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Carlos</td>
                  <td>carlos@example.com</td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
      </PageBuilder>
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onScheduleAppointment={handleScheduleAppointment}
      />
    </div>
  );
}
