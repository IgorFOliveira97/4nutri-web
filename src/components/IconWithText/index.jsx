import SimpleText from '../SimpleText';
import './icon-with-text.css';
export default function IconWithText({ icon: IconComponent, text, onClick }) {
  return (
    <div className="icon-with-text" onClick={onClick}>
      <IconComponent className="icon" />
      <SimpleText>{text}</SimpleText>
    </div>
  );
}
