import React from 'react';

//styles
import '../assets/styles/Header.css'

//img
import Logo from '../assets/static/logoWhite.png'

const Header = () => {
  return (
    <header className='Header'>
      <div className='container-img'>
        <img src={Logo} alt=""/>
      </div>
      <div className='container-menu'>
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Courses</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;