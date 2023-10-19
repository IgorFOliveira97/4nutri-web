import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TextBlock from './TextBlock';
import './menu.css';
import {
  MdOutlineHome,
  MdOutlineMenu,
  MdOutlineRestaurantMenu,
  MdPeopleOutline,
} from 'react-icons/md';

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const [keepMenuOpen, setKeepMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
    setKeepMenuOpen((keepMenuOpen) => !keepMenuOpen);
  };
  const handleMouseOver = () => {
    setShowMenu(true);
  };
  const handleMouseLeave = () => {
    if (!keepMenuOpen) {
      setShowMenu(false);
    }
  };

  return (
    <div className={'menu'} onClick={handleMenu}>
      <MdOutlineMenu className="menu-icon" />
      <div
        className="menu-itens"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
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
          </>
        )}
      </div>
    </div>
  );
}
