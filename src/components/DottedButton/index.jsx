import './dashed-button.css';

export default function DashedButton({ width, children, onClick }) {
  return (
    <button
      className="dashed-button"
      style={{ width: width }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
