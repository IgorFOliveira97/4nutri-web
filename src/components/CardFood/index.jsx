import Button from '../Button';
import './Card.css';
import Container from '../Container/';

export default function CardFood(props) {
  return (
    <div className="food">
      <div className="header">
        <img src={props.img} alt=""></img>
      </div>
      <div className="footer">
        <h4>{props.title}</h4>
        <h5>Proteína: {props.protein}</h5>
        <h5>Carboidratos: {props.carbs}</h5>
        <h5>Gordura: {props.fat}</h5>
        <Container>
          <Button onClick={props.onClick}>Ver Alimento</Button>
        </Container>
      </div>
    </div>
  );
}
