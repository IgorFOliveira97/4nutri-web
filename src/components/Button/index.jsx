import './Button.css';

function Button({ width = 'fit-content', radius = '6px', children, onClick }) {
  return (
    <button
      className="button"
      style={{ width: width, borderRadius: radius }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
