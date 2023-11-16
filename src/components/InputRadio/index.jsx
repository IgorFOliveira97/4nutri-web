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
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        checked={props.checked}
      />
      <Label htmlFor={props.id}>{props.value}</Label>
    </div>
  );
}
