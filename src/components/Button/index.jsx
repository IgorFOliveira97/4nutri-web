import './Button.css';

function Button({ width, children }) {
  return (
    <button className="button" style={{ width: width }}>
      {children}
    </button>
  );
}
export default Button;
