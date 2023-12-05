import './Select.css';
export default function Select({ children, name, value, onChange, width }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      style={{ width: width }}
    >
      {children}
    </select>
  );
}
