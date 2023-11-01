import './input.css';

export default function Input({
  type,
  name,
  id,
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    ></input>
  );
}
