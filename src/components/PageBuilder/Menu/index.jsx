import { useState } from 'react';
import TextBlock from './TextBlock';
import './menu.css';
import { MdOutlineHome, MdOutlineMenu, MdOutlineRestaurantMenu, MdPeopleOutline } from "react-icons/md";

export default function Menu() {
const [showMenu, setShowMenu] = useState(false);

const handleMenu = () =>{
    setShowMenu(showMenu  => !showMenu);
}
  return (
    <div className={`menu ${showMenu ? 'active' : ''}`}>
      <MdOutlineMenu className='menu-icon' onClick={handleMenu} />
      <div className="menu-itens">
          {showMenu ? 
          <>
              <TextBlock icon={MdOutlineHome} display='flex' onClick={handleMenu}>Início</TextBlock>
              <TextBlock icon={MdOutlineRestaurantMenu} display='flex' onClick={handleMenu}>Alimentos</TextBlock>
              <TextBlock icon={MdPeopleOutline} display='flex' onClick={handleMenu}>Pacientes</TextBlock>
          </> : 
          <>
              <TextBlock icon={MdOutlineHome} onClick={handleMenu}/>
              <TextBlock icon={MdOutlineRestaurantMenu} onClick={handleMenu}/>
              <TextBlock icon={MdPeopleOutline} onClick={handleMenu}/>
          </>}
      </div>
    </div>
)

}
