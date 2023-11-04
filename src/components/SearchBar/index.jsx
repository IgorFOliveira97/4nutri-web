import Input from '../../components/Input';
import Button from '../Button';
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

        <Button onClick={() => navigate('/patients/registration')}>
          {props.button}
        </Button>
      </div>
    </div>
  );
}
