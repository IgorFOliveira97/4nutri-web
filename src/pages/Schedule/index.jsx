//npm i --save @devexpress/dx-react-core @devexpress/dx-react-scheduler
//npm i --save @devexpress/dx-react-scheduler-material-ui
import * as React from 'react';
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
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../../components/Button';

const Appointment = ({ style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: '#4caf50',
      borderRadius: '8px',
      color: '#fff',
    }}
  />
);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      currentDate: new Date(),
      isModalOpen: false,
      newAppointment: {
        startDate: '',
        endDate: '',
        title: '',
      },
    };
  }

  componentDidMount() {
    // Simular carregamento de dados iniciais
    const initialAppointments = [
      {
        startDate: '2023-10-31T10:00',
        endDate: '2023-10-31T11:00',
        title: 'Compromisso Inicial',
      },
      {},
    ];

    this.setState({ data: initialAppointments });
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newAppointment: {
        ...prevState.newAppointment,
        [name]: value,
      },
    }));
  };

  addAppointment = () => {
    // Adicionar um novo compromisso
    const { newAppointment, data } = this.state;
    const updatedData = [
      ...data,
      {
        startDate: newAppointment.startDate,
        endDate: newAppointment.endDate,
        title: newAppointment.title,
        description: newAppointment.description,
      },
    ];

    this.setState({
      data: updatedData,
      isModalOpen: false,
      newAppointment: {
        startDate: '',
        endDate: '',
        title: '',
        description: '',
      },
    });
  };

  render() {
    const { data, currentDate, isModalOpen, newAppointment } = this.state;

    return (
      <PageBuilder>
        <Paper>
          <Scheduler data={data} height={660}>
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={(currentDate) => {
                this.setState({ currentDate });
              }}
            />
            <WeekView startDayHour={9} endDayHour={19} />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments appointmentComponent={Appointment} />
          </Scheduler>
        </Paper>
        <Button onClick={this.openModal}>Adicionar Compromisso</Button>

        {/* Modal para adicionar um novo compromisso */}
        <Modal open={isModalOpen} onClose={this.closeModal}>
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
              name="startDate"
              value={newAppointment.startDate}
              onChange={this.handleInputChange}
              sx={{ marginBottom: 2 }}
              fullWidth
            />
            <TextField
              label="Data de Término"
              type="datetime-local"
              name="endDate"
              value={newAppointment.endDate}
              onChange={this.handleInputChange}
              sx={{ marginBottom: 2 }}
              fullWidth
            />
            <TextField
              label="Título"
              name="title"
              value={newAppointment.title}
              onChange={this.handleInputChange}
              sx={{ marginBottom: 2 }}
              fullWidth
            />
            <TextField
              label="Descrição"
              name="description"
              value={newAppointment.description}
              onChange={this.handleInputChange}
              sx={{ marginBottom: 2 }}
              fullWidth
            />
            <Button
              onClick={this.addAppointment}
              variant="contained"
              color="primary"
            >
              Salvar
            </Button>
          </Box>
        </Modal>
      </PageBuilder>
    );
  }
}
