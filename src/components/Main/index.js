import React from 'react'

//styles
import {
  MainContainer,
  MainDescription,
  MainTitle,
  MainContainerImg,
  MainImg,
} from './style.js';

//img 
import mainImage from '../../assets/static/Untitled-1.png'

export const Main = () => {
  return (
    <MainContainer>
      <MainDescription>
        <MainTitle>"A goal without a plan <br/> is just a wish"</MainTitle>
      </MainDescription>
      <MainContainerImg>
        <MainImg src={mainImage} alt='main-img' />
      </MainContainerImg>
    </MainContainer>
  );
}
