import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import SimpleText from '../SimpleText';
import SimpleTitle from '../SimpleTitle';
import './Card.css';

export default function Card(props) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: props.color }}>
        <SimpleTitle>{props.title}</SimpleTitle>
      </div>
      <div className="card-body">
        <SimpleText>{props.children}</SimpleText>
      </div>
      <div className="card-footer">
        <Button
          radius="0 0 8px 8px"
          width="100%"
          onClick={() => navigate('/user/Registration')}
        >
          {props.button}
        </Button>
      </div>
    </div>
  );
}
