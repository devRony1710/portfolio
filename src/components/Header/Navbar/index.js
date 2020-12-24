import React from 'react'
import {NavbarWrapper} from './style'

export const Navbar = ({open}) => {
  return (
    <NavbarWrapper open={open}>
      <a href='/'>About Me</a>
      <a href='/'>Projects</a>
      <a href='/'>Courses</a>
      <a href='/'>Blog</a>
    </NavbarWrapper>
  )
}