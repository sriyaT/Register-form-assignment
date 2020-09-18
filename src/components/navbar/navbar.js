import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Login from '../../pages/login';
import Options from '../../pages/options';
import ForgetPassword from '../../pages/forgetPassword';
import Register from '../../pages/Register';

import './navbar.css';

const renderScreen = ({ currentScreen, setCurrentScreen }) => {
  switch (currentScreen) {
    case 'options':
      return <Options setCurrentScreen={setCurrentScreen} />;
    case 'login':
      return <Login setCurrentScreen={setCurrentScreen} />;
    case 'signup':
      return <Register setCurrentScreen={setCurrentScreen} />;
    case 'forgetpassword':
      return <ForgetPassword setCurrentScreen={setCurrentScreen} />;
    default:
      return <Options setCurrentScreen={setCurrentScreen} />;
  }
};

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('options');

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#265CC6' }}>
        <div className='navbar'>
          <div className='menu-bars' id='menu-btn'>
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <div
                className='menu-bars'
                id='close-btn'
                onClick={() => {
                  showSidebar();
                  setCurrentScreen('options');
                }}
              >
                <AiIcons.AiOutlineClose />
              </div>
            </li>
            {renderScreen({
              currentScreen,
              setCurrentScreen,
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
