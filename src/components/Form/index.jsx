import './form.css';

export default function Form(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
}
