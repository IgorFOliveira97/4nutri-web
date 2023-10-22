import './input.css';

export default function Input({ type, name, id, placeholder, required }) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
    ></input>
  );
}
