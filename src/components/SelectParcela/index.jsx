import './SelectParcelas.css';
export default function SelectParcelas(props, name) {
  return (
    <select className="select2" name={name}>
      {props.children}
    </select>
  );
}
