import React, {useState} from 'react';

//components
import {Navbar} from '../Header/Navbar/index.js'
import { MenuButton } from '../Header/MenuButton/index'

//styles
import {HeaderWrapper} from './style.js'

//img
import Logo from '../../assets/static/logoHeader.png'

export const Header = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <HeaderWrapper>
      <img src = {Logo} alt='Logo'></img>
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
};

