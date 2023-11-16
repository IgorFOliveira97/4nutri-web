import { useNavigate } from 'react-router-dom';
import imagem from '../../assets/images/avatar-padrao.png';
import Button from '../../components/ButtonPacient';
import PageBuilder from '../../components/PageBuilder';
import SearchBar from '../../components/SearchBar';
import './Patient.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Patients() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState();

  useEffect(() => {
    axios.get('patient').then((response) => {
      setPatients(response.data);
    });
  }, []);
  console.log(patients);
  return (
    <PageBuilder pageName="Meus Pacientes" userName="João Pablo">
      <SearchBar
        button="Novo paciente"
        navigate="/patients/registration"
        color="#3CB371"
      >
        {' '}
      </SearchBar>
      <div className="characters-container">
        {patients &&
          patients.map((patient) => {
            return (
              <div className="character" key={patient._id}>
                <div className="header">
                  <img
                    src={patient.photo || imagem}
                    alt={`Foto de ${patient.name}`}
                  ></img>
                </div>
                <div className="footer">
                  <h4>{patient.name}</h4>
                  <h5>{`Peso: ${patient.weight} kg`}</h5>
                  <p>{`Data de nascimento: ${patient.birth_date}`}</p>
                  <div className="button-container">
                    <Button
                      onClick={() =>
                        navigate(`/patients/details/${patient._id}`)
                      }
                    >
                      Ver Perfil
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        {/* <div className="character">
          <div className="header">
            <img src={imagem} alt=""></img>
          </div>
          <div className="footer">
            <h4>Igor</h4>
            <h5>Musculoso</h5>
            <p>Saudavel</p>
            <div className="button-container">
              <Button onClick={() => navigate('/patients/details')}>
                Ver Perfil
              </Button>
            </div>
          </div>
        </div>
        <div className="character">
          <div className="header">
            <img src={imagem} alt=""></img>
          </div>
          <div className="footer">
            <h4>Igor</h4>
            <h5>Musculoso</h5>
            <p>Saudavel</p>
            <div className="button-container">
              <Button onClick={() => navigate('/patients/details')}>
                Ver Perfil
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </PageBuilder>
  );
}
