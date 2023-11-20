import Input from '../../components/Input';
import ButtonPacient from '../ButtonPacient';
import { useNavigate } from 'react-router-dom';
import './searchBar.css';

export default function searchBar(props) {
  const navigate = useNavigate();
  return (
    <div
      className="search-bar-container"
      style={{ backgroundColor: props.color }}
    >
      <div className="search-bar">
        <Input
          type="search"
          class="form-control w-75"
          placeholder="Pesquisar"
          id="pesquisar"
        />

        <ButtonPacient onClick={() => navigate(props.navigate)}>
          {props.button}
        </ButtonPacient>
      </div>
    </div>
  );
}
