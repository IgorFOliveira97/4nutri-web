import './header.css';
import logo from '../../../assets/images/logo-sem-fundo.png';
// import avatar from '../../../assets/images/avatar-padrao.png';
import SimpleText from '../../SimpleText';
import SimpleTitle from '../../SimpleTitle';
import { useContext } from 'react';
import { Context } from '../../../Context/AuthProvider';
import Button from '../../Button';
import { useNavigate } from 'react-router-dom';

export default function Header({ pageName }) {
  const navigate = useNavigate();
  const { authenticated, userData, handleLogout } = useContext(Context);

  return (
    <header>
      <img src={logo} alt="Logo da 4 Nutri" />
      <SimpleTitle>{pageName}</SimpleTitle>
      <div className="user">
        {authenticated && userData ? (
          <>
            {/* <img src={avatar} alt="Ícone do avatar do usuário" /> */}
            <SimpleText>{userData.name}</SimpleText>
            <Button onClick={handleLogout}>Sair</Button>
          </>
        ) : (
          <Button onClick={() => navigate('/login')}>Login</Button>
        )}
      </div>
    </header>
  );
}
