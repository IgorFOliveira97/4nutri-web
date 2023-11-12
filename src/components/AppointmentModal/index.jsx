import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../Button';
import Label from '../Label';
import Input from '../Input';
import TextArea from '../TextArea';
import SimpleTitle from '../SimpleTitle';

const AppointmentModal = ({ isOpen, onClose, onScheduleAppointment }) => {
  const [appointmentData, setAppointmentData] = useState({
    nomePaciente: '',
    startdate: '',
    endDate: '',
    title: '',
    description: '',
    peso: '',
  });

  const handleInputChange = (field, value) => {
    setAppointmentData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleScheduleClick = () => {
    // Adicione validação ou lógica adicional, se necessário
    onScheduleAppointment(appointmentData);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          maxHeight: '80vh',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          overflow: 'auto',
        }}
      >
        <TextField
          name="paciente"
          value="igor"
          aria-readonly
          disabled
          onChange={(e) => handleInputChange('paciente', e.target.value)}
          sx={{ marginBottom: 2 }}
          fullWidth
        />
        <Label>Início da consulta</Label>
        <TextField
          type="datetime-local"
          name="startDate"
          value={appointmentData.startDate}
          onChange={(e) => handleInputChange('endDate', e.target.value)}
          sx={{ marginBottom: 2 }}
          fullWidth
        />
        <Label>Encerramento da consulta</Label>
        <TextField
          type="datetime-local"
          name="endDate"
          value={appointmentData.endDate}
          onChange={(e) => handleInputChange('endDate', e.target.value)}
          sx={{ marginBottom: 2 }}
          fullWidth
        />
        <TextField
          label="Título"
          name="title"
          value={appointmentData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          sx={{ marginBottom: 2 }}
          fullWidth
        />
        <TextField
          label="Descrição"
          name="description"
          value={appointmentData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          sx={{ marginBottom: 2 }}
          fullWidth
        />
        <SimpleTitle>Medidas Antropometricas</SimpleTitle>
        <Label>Peso</Label>
        <Input
          name="peso"
          value=""
          onChange={(e) => handleInputChange('peso', e.target.value)}
        />
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
        <SimpleTitle>Recordatorio</SimpleTitle>
        <Label>Café da Manhã</Label>
        <TextArea></TextArea>
        <Label> Almoço</Label>
        <TextArea rows="5" cols="33"></TextArea>
        <Label>Lanche da Tarde</Label>
        <TextArea rows="5" cols="33"></TextArea>
        <Label>Jantar</Label>
        <TextArea rows="5" cols="33"></TextArea>
        <Label>Ceia</Label>
        <TextArea rows="5" cols="33"></TextArea>
        <SimpleTitle>Medicamentos</SimpleTitle>
        <Label>Medicamentos que o paciente consome</Label>
        <TextArea rows="5" cols="40"></TextArea>
        <SimpleTitle>Intolerancia e alergias</SimpleTitle>{' '}
        <Label>
          Descreva tudo o que o paciente tiver de alergias e intolerancia{' '}
        </Label>
        <TextArea rows="7" cols="40"></TextArea>
        <Button
          onClick={handleScheduleClick}
          variant="contained"
          color="primary"
        >
          Agendar
        </Button>
      </Box>
    </Modal>
  );
};

export default AppointmentModal;
