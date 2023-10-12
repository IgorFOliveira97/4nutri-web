import './footer.css';
import Facebook from '../../../../assets/images/facebook.png';
import Instagram from '../../../../assets/images/instagram.png';
import Whatsapp from '../../../../assets/images/whatsapp.png';
export default function Footer() {
  return (
    <footer>
        <img src={Facebook} alt="Ícone do Facebook" />
        <img src={Instagram} alt="Ícone do Instagram" />
        <img src={Whatsapp} alt="Ícone do Whatsapp" />
        <p>Powered By 6-Tech</p>
    </footer>
  );
}
