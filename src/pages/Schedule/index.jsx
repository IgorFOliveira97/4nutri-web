import React, { useState, useEffect, useContext } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import PageBuilder from '../../components/PageBuilder';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../../components/Button';
import { toast } from 'react-toastify';
import { Context } from '../../Context/AuthProvider';
import Options from '../../components/Options';
import Select from '../../components/Select';
import handleInputChange from '../../handlers/input.handler';
import Container from '../../components/Container';

const Appointment = ({ style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: '#4caf50',
      borderRadius: '8px',
      color: '#fff',
      cursor: 'pointer',
    }}
  />
);
const Demo = () => {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewAppointmentModalOpen, setIsNewAppointmentModalOpen] =
    useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const { userData } = useContext(Context);
  const [schedule, setSchedule] = useState({
    nutritionist_id: userData._id,
    patient_id: '',
    start: '',
    end: '',
  });
  const [patients, setSchedules] = useState([]);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`/schedules/${userData._id}`);
      setData(
        response.data.map((appointment) => ({
          startDate: new Date(appointment.start),
          endDate: new Date(appointment.end),
          title: appointment.patient_id.name, // Ajuste conforme necessário
          ...appointment,
        }))
      );
    } catch (error) {
      console.error('Erro ao buscar compromissos:', error);
    }
  };

  useEffect(() => {
    axios.get(`patients/${userData._id}`).then((response) => {
      setSchedules(response.data);
    });
  }, [userData._id]);

  useEffect(() => {
    fetchAppointments();
  }, [userData._id, currentDate]);

  const handleAppointmentClick = (appointment) => {
    setIsModalOpen(true);
    setSelectedAppointment(appointment);
  };

  const openNewAppointmentModal = () => {
    setIsNewAppointmentModalOpen(true);
  };

  const closeNewAppointmentModal = () => {
    setIsNewAppointmentModalOpen(false);
    setSchedule({
      nutritionist_id: userData._id,
      patient_id: '',
      start: '',
      end: '',
    });
  };

  const addNewAppointment = async () => {
    console.log(schedule);
    try {
      const response = await axios.post('schedule', schedule);
      if (response.status === 201) {
        toast.success('Compromisso agendado com sucesso!');
        await fetchAppointments();
      } else {
        toast.error('Houve um erro no agendamento do compromisso!');
        console.error(response);
      }
    } catch (error) {
      toast.error('Houve um erro no agendamento do compromisso!');
      console.error(error);
    }

    setIsNewAppointmentModalOpen(false);
    setSchedule({
      nutritionist_id: userData._id,
      patient_id: '',
      start: '',
      end: '',
    });
  };

  const saveSchedule = async (event) => {
    event.preventDefault();
    console.log(setSchedule);
    await addNewAppointment();
  };

  return (
    <PageBuilder>
      <Paper>
        <Scheduler data={data} height={660} locale={'pt-BR'}>
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={(currentDate) => {
              setCurrentDate(currentDate);
            }}
          />
          <WeekView startDayHour={9} endDayHour={19} />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments
            appointmentComponent={(props) => (
              <Appointment
                {...props}
                onClick={() => handleAppointmentClick(props.data)}
              />
            )}
          />
        </Scheduler>
      </Paper>
      <Modal
        open={isNewAppointmentModalOpen}
        onClose={closeNewAppointmentModal}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <TextField
            label="Data de Início"
            type="datetime-local"
            name="start"
            value={schedule.start}
            onChange={(event) => handleInputChange(event, setSchedule)}
            sx={{ marginBottom: 2 }}
            fullWidth
          />
          <TextField
            label="Data de Término"
            type="datetime-local"
            name="end"
            value={schedule.end}
            onChange={(event) => handleInputChange(event, setSchedule)}
            sx={{ marginBottom: 2 }}
            fullWidth
          />
          <Select
            label="Selecione o paciente"
            name="patient_id"
            value={schedule.patient_id}
            width="100%"
            onChange={(event) => handleInputChange(event, setSchedule)}
          >
            <Options>Selecione o paciente</Options>
            {patients &&
              patients.map((patient) => {
                return (
                  <Options key={patient._id} value={patient._id}>
                    {patient.name}
                  </Options>
                );
              })}
          </Select>

          <Container>
            <Button onClick={saveSchedule} variant="contained" color="primary">
              Salvar
            </Button>
          </Container>
        </Box>
      </Modal>
      <Button onClick={openNewAppointmentModal}>Adicionar Compromisso</Button>
    </PageBuilder>
  );
};

export default Demo;
