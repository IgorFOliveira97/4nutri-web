import './input.css';

export default function Input({
  type,
  name,
  id,
  placeholder,
  required,
  value,
  onChange,
  disabled,
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
      disabled={disabled}
    ></input>
  );
}
