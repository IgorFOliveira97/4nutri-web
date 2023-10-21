import './inputRadio.css';

export default function InputRadio(props) {
  return (
    <div className="inputRadioContainer">
      <input
        className="inputRadio"
        type="radio"
        name={props.name}
        id={props.id}
      />
      <label className="labelStyle">{props.value}</label>
    </div>
  );
}
