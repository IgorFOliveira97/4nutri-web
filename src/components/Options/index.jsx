export default function Options({ children, value, name }) {
  return (
    <option value={value} name={name}>
      {children}
    </option>
  );
}
