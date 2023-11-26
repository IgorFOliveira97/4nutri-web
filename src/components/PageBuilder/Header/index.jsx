import './header.css';
import logo from '../../../assets/images/logo-sem-fundo.png';
import avatar from '../../../assets/images/avatar-padrao.png';
import SimpleText from '../../SimpleText';
import SimpleTitle from '../../SimpleTitle';
import { useContext } from 'react';
import { Context } from '../../../Context/AuthProvider';

export default function Header(props) {
  const { authenticated, userData } = useContext(Context);
  return (
    <header>
      <img src={logo} alt="Logo da 4 Nutri" />
      <SimpleTitle>{props.pageName}</SimpleTitle>
      <div className="user">
        <img src={avatar} alt="Ícone do avatar do usuário" />
        {authenticated && userData && <SimpleText>{userData.name}</SimpleText>}
      </div>
    </header>
  );
}
