import './text-area.css';
export default function TextArea({ rows, cols, name, value, onChange }) {
  return (
    <textarea
      rows={rows}
      cols={cols}
      name={name}
      value={value}
      onChange={onChange}
    ></textarea>
  );
}
