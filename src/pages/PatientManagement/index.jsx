import { useNavigate } from 'react-router-dom';
import PageBuilder from '../../components/PageBuilder';
import SimpleText from '../../components/SimpleText';
import SimpleTitle from '../../components/SimpleTitle';
import './PatientManagement.css';

export default function PatientManagement() {
  const navigate = useNavigate();
  return (
    <PageBuilder pageName="Dashboard" userName="João Pablo">
      <div className="row">
        {/* <div className="col-12 col-md-6">
          <a onClick={() => navigate('/patients')}>
            <div className="card">
              <SimpleTitle>Meus Pacientes</SimpleTitle>
              <SimpleText>Verifica sua lsita de pacientes</SimpleText>
            </div>
          </a>
        </div> */}
        <div className="col-12 col-md-6">
          <a onClick={() => navigate('/patients/registration')}>
            <div className="card">
              <SimpleTitle>Cadastre um Paciente</SimpleTitle>
              <SimpleText>Cadastre seu novo paciente</SimpleText>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          <a onClick={() => navigate('')}>
            <div className="card">
              <SimpleTitle>Minhas consultas</SimpleTitle>
              <SimpleText>Acompanhe sua agenda</SimpleText>
            </div>
          </a>
        </div>
      </div>
    </PageBuilder>
  );
}
