import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PageBuilder from '../../components/PageBuilder';
import AppointmentModal from '../../components/AppointmentModal';
import Form from '../../components/Form';
import SimpleTitle from '../../components/SimpleTitle';
import Input from '../../components/Input';
import Label from '../../components/Label';
import InputRadio from '../../components/InputRadio';
import Button from '../../components/Button';
import Imagem from '../../assets/images/igor.jpg';
import './PatientDetails.css';

export default function PatientDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleScheduleAppointment = (appointmentData) => {
    // Adicione a lógica para lidar com o agendamento aqui
    console.log('Consulta agendada:', appointmentData);
    toast.success('Consulta agendada com sucesso!');
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedValues, setEditedValues] = useState({
    nome: 'Igor Oliveira',
    telefone: '987870169',
    nascimento: '07/03/1997',
    genero: 'Masculino',
    email: 'igor.io756@gmail.com',
  });

  const handleInputChange = (field, value, type) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (event) => {
    console.log(event);
    setIsEditing(false);
    // toast.success('Dados editados com Sucesso');
  };
  return (
    <div>
      <PageBuilder>
        <Tabs>
          <TabList className="detalhes">
            <Tab>Dados Pessoais</Tab>
            <Tab>Consultas</Tab>
          </TabList>
          <TabPanel>
            <Form>
              <img src={Imagem} alt="" />
              <SimpleTitle>
                {isEditing ? 'Editar informações' : 'Detalhes do Paciente'}
              </SimpleTitle>
              <Label>Nome</Label>
              <Input
                type="text"
                name="nome"
                id="nome"
                value={editedValues.nome}
                onChange={(e) => handleInputChange('nome', e.target.value)}
                disabled={!isEditing}
              />
              <Label>Telefone</Label>
              <Input
                type="tel"
                name="Telefone"
                id="Telefone"
                value={editedValues.telefone}
                onChange={(e) => handleInputChange('telefone', e.target.value)}
                disabled={!isEditing}
              />
              <Label>Data de nascimento</Label>
              <Input
                type="date"
                name="nascimento"
                id="nascimento"
                value={editedValues.nascimento}
                onChange={(e) =>
                  handleInputChange('nascimento', e.target.value)
                }
                disabled={!isEditing}
              />
              <Label>Gênero</Label>
              <fieldset className="fildset">
                <InputRadio
                  name="genero"
                  id="masculino"
                  value="Masculino"
                  checked={editedValues.genero === 'Masculino'}
                  onChange={(e) => handleInputChange('genero', e.target.value)}
                  disabled={!isEditing}
                />
                <InputRadio
                  name="genero"
                  id="feminino"
                  value="Feminino"
                  checked={editedValues.genero === 'Feminino'}
                  onChange={() => handleInputChange('genero', 'Feminino')}
                  disabled={!isEditing}
                />
                <InputRadio
                  name="genero"
                  id="outro"
                  value="Outro"
                  checked={editedValues.genero === 'Outro'}
                  onChange={() => handleInputChange('genero', 'Outro')}
                  disabled={!isEditing}
                />
              </fieldset>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={editedValues.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={!isEditing}
              ></Input>
              <SimpleTitle>Medidas Antropometricas</SimpleTitle>
              <Label>Peso</Label>
              <Input
                type="text"
                value={editedValues.peso}
                onChange={(e) => handleInputChange('peso', e.target.value)}
                disabled={!isEditing}
              />
              <Label>Altura</Label>
              <Input type="number"></Input>
              <Label>IMC</Label>
              <Input type="number"></Input>

              {/* Adicione outros campos de input conforme necessário, 
          usando a mesma lógica */}
            </Form>
            <div className="button-cont">
              {isEditing && <Button onClick={handleSaveClick}>Salvar</Button>}
              {!isEditing && <Button onClick={handleEditClick}>Editar</Button>}
              <Button onClick={() => setIsModalOpen(true)}>
                Nova consulta
              </Button>
            </div>
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
