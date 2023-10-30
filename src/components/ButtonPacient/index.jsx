import './ButtonPacient.css';

function ButtonPacient({
  width = 'fit-content',
  radius = '6px',
  children,
  onClick,
}) {
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
export default ButtonPacient;
