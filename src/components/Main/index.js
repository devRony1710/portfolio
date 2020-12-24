import React from 'react'

//styles
import {MainContainer, MainContainerImg, MainImg} from './style.js'

//img 
import mainImage from '../../assets/static/Untitled-1.png'

export const Main = () => {
  return (
    <MainContainer>
      <MainContainerImg className='main-container-img'>
        <MainImg src={mainImage} alt='main-img' />
      </MainContainerImg>
    </MainContainer>
  );
}
