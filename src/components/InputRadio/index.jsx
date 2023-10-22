import './inputRadio.css';
import Label from '../Label';

export default function InputRadio(props) {
  return (
    <div className="inputRadioContainer">
      <input
        className="inputRadio"
        type="radio"
        name={props.name}
        id={props.id}
      />
      <Label htmlFor={props.id}>{props.value}</Label>
    </div>
  );
}
