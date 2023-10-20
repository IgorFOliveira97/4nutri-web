import SimpleText from '../SimpleText';
import Line from '../Line';
import './text-area-with-label.css';

export default function TextAreaWithLabel({ label, children }) {
  return (
    <div className="text-area">
      <label>{label}</label>
      <SimpleText>{children}</SimpleText>
      <Line />
    </div>
  );
}
