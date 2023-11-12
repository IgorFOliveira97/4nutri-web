import './text-area.css';
export default function TextArea({ value, rows, cols }) {
  return <textarea value={value} rows={rows} cols={cols}></textarea>;
}
