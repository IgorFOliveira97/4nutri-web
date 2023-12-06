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
  const [newAppointment, setNewAppointment] = useState({
    nutritionist_id: userData._id,
    patient_id: '',
    start: '',
    end: '',
  });
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get(`patients/${userData._id}`).then((response) => {
      setPatients(response.data);
    });
  }, [userData._id]);

  const handleAppointmentClick = (appointment) => {
    setIsModalOpen(true);
    setSelectedAppointment(appointment);
  };

  const openNewAppointmentModal = () => {
    setIsNewAppointmentModalOpen(true);
  };

  const closeNewAppointmentModal = () => {
    setIsNewAppointmentModalOpen(false);
    setNewAppointment({
      nutritionist_id: userData._id,
      patient_id: '',
      start: '',
      end: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: value,
    }));
  };

  const addNewAppointment = () => {
    const updatedData = [
      ...data,
      {
        startDate: newAppointment.start,
        endDate: newAppointment.end,
        title: 'Paciente: Cesar',
        // Outros campos do compromisso podem ser preenchidos conforme necessário
      },
    ];
    setData(updatedData);
    setIsNewAppointmentModalOpen(false);
    setNewAppointment({
      nutritionist_id: userData._id,
      patient_id: '',
      start: '',
      end: '',
    });
  };

  const saveSchedule = async (event) => {
    event.preventDefault();
    console.log(newAppointment);
    await axios
      .post('schedule', newAppointment)
      .then((response) => {
        if (response.status === 201) {
          toast.success('Compromisso agendado com sucesso!');
          addNewAppointment(); // Adiciona o novo compromisso ao calendário
        } else {
          toast.error('Houve um erro no agendamento do compromisso!');
          console.error(response);
        }
      })
      .catch((error) => {
        toast.error('Houve um erro no agendamento do compromisso!');
        console.error(error);
      });
  };

  return (
    <PageBuilder>
      <Paper>
        <Scheduler data={data} height={660}>
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
      {/* Modal para exibir detalhes do compromisso */}

      {/* Modal para adicionar um novo compromisso */}
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
            value={newAppointment.start}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
            fullWidth
          />
          <TextField
            label="Data de Término"
            type="datetime-local"
            name="end"
            value={newAppointment.end}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
            fullWidth
          />

          <Select
            label="Paciente"
            name="patient_id"
            value={newAppointment.patient_id}
            onChange={handleInputChange}
          >
            {patients &&
              patients.map((patient) => (
                <Options key={patient._id} value={patient._id}>
                  {patient.name}
                </Options>
              ))}
          </Select>

          <Button onClick={saveSchedule} variant="contained" color="primary">
            Salvar
          </Button>
        </Box>
      </Modal>
      {/* Botão para abrir o modal de novo compromisso */}
      <Button onClick={openNewAppointmentModal}>Adicionar Compromisso</Button>
    </PageBuilder>
  );
};

export default Demo;
