import './text-block.css';
// import SimpleText from '../../../SimpleText';
import IconWithText from '../../../IconWithText';

export default function TextBlock(props) {
  return (
    <div className="text-block">
      <IconWithText
        icon={props.icon}
        text={props.children}
        display={props.display}
        onClick={props.onClick}
      />
    </div>
  );
}
