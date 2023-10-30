import './input.css';

export default function Input({
  type,
  name,
  id,
  placeholder,
  required,
  value,
  disabled,
}) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
      value={value}
      disabled={disabled}
    ></input>
  );
}
