import './Select.css';
export default function Select(props, name) {
  return <select name={name}>{props.children}</select>;
}
