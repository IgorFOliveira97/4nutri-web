import './outline-button.css';

function OutlineButton({ width = 'fit-content', children, onClick }) {
  return (
    <button
      className="outline-button"
      style={{ width: width }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default OutlineButton;
