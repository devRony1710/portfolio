import React from 'react';
import { NavbarWrapper } from './style';

export const Navbar = ({ open }) => {
  return (
    <NavbarWrapper open={open}>
      <a href="#About">About Me</a>
      <a href="#Projects">Projects</a>
      <a href="#Courses">Courses</a>
      <a href="#Blog">Blog</a>
    </NavbarWrapper>
  );
};
