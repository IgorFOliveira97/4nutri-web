import { useNavigate } from 'react-router-dom';
import imagem from '../../assets/images/avatar-padrao.png';
import ButtonPacient from '../../components/ButtonPacient';
import PageBuilder from '../../components/PageBuilder';
import SearchBar from '../../components/SearchBar';
import './Patient.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Patients() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState();

  useEffect(() => {
    //Após o / será inserido o id do usuário logado
    axios.get('patients/6550d61a6cd5c44a4c75bb60').then((response) => {
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
                    <ButtonPacient
                      onClick={() =>
                        navigate(`/patients/details/${patient._id}`)
                      }
                    >
                      Ver Perfil
                    </ButtonPacient>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </PageBuilder>
  );
}
