// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import imagem from '../../assets/images/igor.jpg';
import Button from '../../components/ButtonPacient';
import PageBuilder from '../../components/PageBuilder';
import SearchBar from '../../components/SearchBar';
import './Patient.css';

export default function Patients() {
  const navigate = useNavigate();

  return (
    <PageBuilder pageName="Meus Pacientes" userName="João Pablo">
      <SearchBar button="Novo paciente" color="#3CB371">
        {' '}
      </SearchBar>
      <div className="characters-container">
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
        </div>
      </div>
    </PageBuilder>
  );
}
