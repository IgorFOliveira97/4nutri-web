import { toast } from 'react-toastify';
import React, { useContext, useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import handleInputChange from '../../handlers/input.handler';
import Container from '../../components/Container';
import { Context } from '../../Context/AuthProvider';

export default function PatientDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const { loading } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleScheduleAppointment = (appointmentData) => {
    console.log('Consulta agendada:', appointmentData);
    toast.success('Consulta agendada com sucesso!');
  };

  const [isEditing, setIsEditing] = useState(false);

  const [appoiments, setAppoiments] = useState();
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
    axios
      .get(`patient/${params.id}`)
      .then((response) => {
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
      })
      .catch((error) => {
        toast.error('Ocorreu um erro ao consultar dados');
        console.error(error);
      });
    axios
      .get(`appoiments/${params.id}`)
      .then((response) => {
        setAppoiments(response.data);
      })
      .catch((error) => {
        toast.error('Ocorreu um erro ao listar consultas');
        console.error(error);
      });
  }, []);

  return (
    <div>
      <PageBuilder>
        {!loading && (
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
                      {isEditing
                        ? 'Editar informações'
                        : 'Detalhes do Paciente'}
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
                        onChange={(event) =>
                          handleInputChange(event, setPatient)
                        }
                        disabled={!isEditing}
                      />
                      <InputRadio
                        name="gender"
                        id="feminino"
                        value="Feminino"
                        checked={patient.gender === 'Feminino'}
                        onChange={(event) =>
                          handleInputChange(event, setPatient)
                        }
                        disabled={!isEditing}
                      />
                      <InputRadio
                        name="gender"
                        id="outro"
                        value="Outro"
                        checked={patient.gender === 'Outro'}
                        onChange={(event) =>
                          handleInputChange(event, setPatient)
                        }
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
                    <Button
                      onClick={
                        () => navigate(`/patient/${params.id}/appoiment`)
                        // setIsModalOpen(true)
                      }
                    >
                      Nova consulta
                    </Button>
                  </Container>
                </>
              )}
            </TabPanel>
            <TabPanel>
              <Container>
                <table className="table-appoiments">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Altura (cm)</th>
                      <th>Peso (kg)</th>
                      <th>IMC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appoiments &&
                      appoiments.map((appoiment) => {
                        return (
                          <tr key={appoiment._id}>
                            <td>{appoiment.appoiment_date}</td>
                            <td>{appoiment.height}</td>
                            <td>{appoiment.weight}</td>
                            <td>{appoiment.bmi}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </Container>
            </TabPanel>
          </Tabs>
        )}
      </PageBuilder>
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onScheduleAppointment={handleScheduleAppointment}
      />
    </div>
  );
}
