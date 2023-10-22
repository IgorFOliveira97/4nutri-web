import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TextBlock from './TextBlock';
import './menu.css';
import {
  MdOutlineHome,
  MdOutlineMenu,
  MdOutlineRestaurantMenu,
  MdOutlineSettings,
  MdPeopleOutline,
} from 'react-icons/md';

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const openMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  const handleMouseOver = () => {
    setShowMenu(true);
  };
  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <div
      className={'menu'}
      onClick={openMenu}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <MdOutlineMenu className="menu-icon" />
      <div className="menu-itens">
        {showMenu ? (
          <>
            <TextBlock
              icon={MdOutlineHome}
              display="flex"
              onClick={() => navigate('/')}
            >
              Início
            </TextBlock>
            <TextBlock
              icon={MdOutlineRestaurantMenu}
              display="flex"
              onClick={() => navigate('/foods')}
            >
              Alimentos
            </TextBlock>
            <TextBlock
              icon={MdPeopleOutline}
              display="flex"
              onClick={() => navigate('/patients')}
            >
              Pacientes
            </TextBlock>
            <TextBlock
              icon={MdOutlineSettings}
              display="flex"
              onClick={() => navigate('/user')}
            >
              Meus dados
            </TextBlock>
          </>
        ) : (
          <>
            <TextBlock icon={MdOutlineHome} onClick={() => navigate('/')} />
            <TextBlock
              icon={MdOutlineRestaurantMenu}
              onClick={() => navigate('/foods')}
            />
            <TextBlock
              icon={MdPeopleOutline}
              onClick={() => navigate('/patients')}
            />
            <TextBlock
              icon={MdOutlineSettings}
              onClick={() => navigate('/user')}
            />
          </>
        )}
      </div>
    </div>
  );
}
