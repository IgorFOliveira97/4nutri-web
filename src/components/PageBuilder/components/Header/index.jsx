import logo from '../../../../assets/images/logo-sem-fundo.png';
import avatar from '../../../../assets/images/avatar-padrao.png';
import './header.css';
export default function Header(props) {
  return (
    <header>
      <img src={logo} alt="Logo da 4 Nutri" />
      <h4>{props.pageName}</h4>
      <div className="user">
        <img src={avatar} alt="Ícone do avatar do usuário" />
        <p>{props.userName}</p>
      </div>
    </header>
  );
}
