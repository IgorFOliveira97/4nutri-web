import imagem from '../../assets/images/Imagem1.png';
// import SimpleText from '../SimpleText';
import SimpleTitle from '../SimpleTitle';
import './sidecard.css';

export default function SideCard(props) {
  return (
    <div className="side-card">
      <div className="side-card-header">
        <img src={imagem} alt="" width={700} height={500} />
      </div>
      <div className="side-card-body">
        <SimpleTitle>{props.title}</SimpleTitle>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
