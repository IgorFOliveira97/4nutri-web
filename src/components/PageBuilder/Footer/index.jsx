import './footer.css';
import Facebook from '../../../assets/images/facebook.png';
import Instagram from '../../../assets/images/instagram.png';
import Whatsapp from '../../../assets/images/whatsapp.png';
import SimpleText from '../../SimpleText';
export default function Footer() {
  return (
    <footer>
      <div className="social-media">
        <img src={Facebook} alt="Ícone do Facebook" />
        <img src={Instagram} alt="Ícone do Instagram" />
        <img src={Whatsapp} alt="Ícone do Whatsapp" />
      </div>
      <SimpleText>Powered by 6-Tech</SimpleText>
    </footer>
  );
}
