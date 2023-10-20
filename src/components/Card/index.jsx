import Button from '../Button';
import SimpleText from '../SimpleText';
import SimpleTitle from '../SimpleTitle';
import './Card.css';

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: props.color }}>
        <SimpleTitle>{props.title}</SimpleTitle>
      </div>
      <div className="card-body">
        <SimpleText>{props.children}</SimpleText>
      </div>
      <div className="card-footer">
        <Button width="100%">{props.button}</Button>
      </div>
    </div>
  );
}
