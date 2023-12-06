import './form.css';

export default function Form({ onSubmit, width, heigth, children }) {
  return (
    <form
      className="form"
      onSubmit={onSubmit}
      style={{ width: width || '80%', height: heigth || '' }}
    >
      {children}
    </form>
  );
}
