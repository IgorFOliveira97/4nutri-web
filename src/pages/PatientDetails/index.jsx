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
import Imagem from '../../assets/images/avatar-padrao.png';
import './PatientDetails.css';
import axios from 'axios';
import { useParams } from 'react-router';
import handleInputChange from '../../handlers/input.handler';

export default function PatientDetails() {
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleScheduleAppointment = (appointmentData) => {
    // Adicione a lógica para lidar com o agendamento aqui
    console.log('Consulta agendada:', appointmentData);
    toast.success('Consulta agendada com sucesso!');
  };

  const [isEditing, setIsEditing] = useState(false);

  const [patient, setPatient] = useState();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (event) => {
    console.log(event);
    setIsEditing(false);
    // toast.success('Dados editados com Sucesso');
  };

  useEffect(() => {
    axios.get(`patient/${params.id}`).then((response) => {
      console.log(response.data);
      setPatient(response.data);
    });
  }, []);

  return (
    <div>
      <PageBuilder>
        <Tabs>
          <TabList className="detalhes">
            <Tab>Dados Pessoais</Tab>
            <Tab>Consultas</Tab>
          </TabList>
          <TabPanel>
            {patient && (
              <>
                <Form>
                  <img src={patient.photo || Imagem} alt="" />
                  <SimpleTitle>
                    {isEditing ? 'Editar informações' : 'Detalhes do Paciente'}
                  </SimpleTitle>
                  <Label>Nome</Label>
                  <Input
                    type="text"
                    name="nome"
                    id="nome"
                    value={patient.name}
                    onChange={(event) => handleInputChange(event, setPatient)}
                    disabled={!isEditing}
                  />
                  <Label>Telefone</Label>
                  <Input
                    type="tel"
                    name="Telefone"
                    id="Telefone"
                    value={patient.phone}
                    onChange={(event) => handleInputChange(event, setPatient)}
                    disabled={!isEditing}
                  />
                  <Label>Data de nascimento</Label>
                  <Input
                    type="date"
                    name="nascimento"
                    id="nascimento"
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
                    name="heigth"
                    value={patient.height}
                    onChange={(event) => handleInputChange(event, setPatient)}
                  ></Input>
                  <Label>IMC</Label>
                  <Input
                    type="number"
                    name="bmi"
                    value={patient.bmi}
                    onChange={(event) => handleInputChange(event, setPatient)}
                  ></Input>
                </Form>
                <div className="button-cont">
                  {isEditing && (
                    <Button onClick={handleSaveClick}>Salvar</Button>
                  )}
                  {!isEditing && (
                    <Button onClick={handleEditClick}>Editar</Button>
                  )}
                  <Button onClick={() => setIsModalOpen(true)}>
                    Nova consulta
                  </Button>
                </div>
              </>
            )}
          </TabPanel>
          <TabPanel>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
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
