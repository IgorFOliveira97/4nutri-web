import Button from '../Button';
import './Card.css';
import Container from '../Container/';

export default function CardFood(props) {
  return (
    <div className="food">
      <div className="header">
        <h4>{props.title}</h4>
      </div>
      <div className="footer">
        <h5>Proteína: {props.protein}</h5>
        <h5>Carboidratos: {props.carbs}</h5>
        <h5>Vitamina C: {props.vitaminC}</h5>
        <Container>
          <Button onClick={props.onClick}>Ver Alimento</Button>
        </Container>
      </div>
    </div>
  );
}
