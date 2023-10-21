import './input.css';

export default function Input(props) {
  return (
    <input
      className="input"
      type={props.type}
      name={props.name}
      id={props.id}
    ></input>
  );
}
