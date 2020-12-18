import React from 'react'

//styles
import {MainContainer, ContainerDescription, Description, MainContainerImg, MainImg} from './style.js'

//img 
import mainImage from '../../assets/static/main.png'

export const Main = () => {
  return (
    <MainContainer>
      <ContainerDescription>
        <Description>
          Hi, I'm Rony Antolinez
        </Description>
      </ContainerDescription>
      <MainContainerImg className='main-container-img'>
        <MainImg src={mainImage} alt='main-img' />
      </MainContainerImg>
    </MainContainer>
  );
}
