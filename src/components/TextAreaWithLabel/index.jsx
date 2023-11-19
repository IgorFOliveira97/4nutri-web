import SimpleText from '../SimpleText';
import Line from '../Line';
import Label from '../Label';
import './text-area-with-label.css';

export default function TextAreaWithLabel({ width = '', label, children }) {
  return (
    <div className="text-area-with-label" style={{ width: width }}>
      <Label>{label}</Label>
      <SimpleText>{children}</SimpleText>
      <Line />
    </div>
  );
}
