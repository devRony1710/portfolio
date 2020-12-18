import React from 'react';

//styles
import {HeaderNav, ContainerImg, Img, ContainerMenu, ListMenu, MenuItem} from './style.js'

//img
import Logo from '../../assets/static/logoHeader.png'

export const Header = () => {
  return (
    <HeaderNav>
      <ContainerImg>
        <Img src={Logo} alt=""/>
      </ContainerImg>
      <ContainerMenu>
        <ListMenu>
          <MenuItem>About Me</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Courses</MenuItem>
        </ListMenu>
      </ContainerMenu>
    </HeaderNav>
  );
};

